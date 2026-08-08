import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, normalizePath, type Plugin, type UserConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

const buildId = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 12) ?? Date.now().toString();
const cabanaMioDir = fileURLToPath(new URL("./public/cabana-mio", import.meta.url));
const cabanaMioVirtualModule = "virtual:cabana-mio-assets";
const resolvedCabanaMioVirtualModule = `\0${cabanaMioVirtualModule}`;
const imageExtensionPattern = /\.(avif|gif|jpe?g|png|webp)$/i;

const getCabanaMioAssets = () => {
  if (!existsSync(cabanaMioDir)) {
    return [];
  }

  return readdirSync(cabanaMioDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && imageExtensionPattern.test(entry.name))
    .map((entry) => `/cabana-mio/${entry.name}`)
    .sort((a, b) => a.localeCompare(b));
};

const cabanaMioAssetsPlugin = (): Plugin => ({
  name: "cabana-mio-assets",
  resolveId(id) {
    return id === cabanaMioVirtualModule ? resolvedCabanaMioVirtualModule : null;
  },
  load(id) {
    if (id !== resolvedCabanaMioVirtualModule) {
      return null;
    }

    return `export default ${JSON.stringify(getCabanaMioAssets())};`;
  },
  configureServer(server) {
    const normalizedDir = normalizePath(cabanaMioDir);

    server.watcher.add(cabanaMioDir);
    server.watcher.on("all", (_event, changedPath) => {
      if (!normalizePath(changedPath).startsWith(normalizedDir)) {
        return;
      }

      const mod = server.moduleGraph.getModuleById(resolvedCabanaMioVirtualModule);
      if (mod) {
        server.moduleGraph.invalidateModule(mod);
      }
      server.ws.send({ type: "full-reload" });
    });
  },
});

const getPrerenderPlugin = async (): Promise<Plugin | null> => {
  try {
    const { default: vitePrerender } = await import("vite-plugin-prerender");

    return vitePrerender({
      staticDir: fileURLToPath(new URL("./dist", import.meta.url)),
      routes: [
        "/",
        "/cabana-mio/",
        "/coming-soon/",
        "/portfolio/",
        "/contact",
        "/about/",
        "/faq/",
        "/privacy-policy/",
      ],
    });
  } catch (error) {
    console.warn("Skipping prerender plugin:", error instanceof Error ? error.message : error);
    return null;
  }
};

// https://vite.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  const prerenderPlugin = await getPrerenderPlugin();

  return {
  base: "/",
  define: {
    __APP_BUILD_ID__: JSON.stringify(buildId),
  },
  plugins: [
    cabanaMioAssetsPlugin(),
    tailwindcss(),
    vue(),
    vueDevTools(),
    prerenderPlugin,
  ].filter((plugin): plugin is Plugin => Boolean(plugin)),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  };
});
