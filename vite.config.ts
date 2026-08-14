import { fileURLToPath, URL } from "node:url";
import { defineConfig, type Plugin, type UserConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

const buildId = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 12) ?? Date.now().toString();

const getPrerenderPlugin = async (): Promise<Plugin | null> => {
  try {
    const { default: vitePrerender } = await import("vite-plugin-prerender");

    return vitePrerender({
      staticDir: fileURLToPath(new URL("./dist", import.meta.url)),
      routes: [
        "/",
        "/cabana-mio/",
        "/long-stay/",
        "/coming-soon/",
        "/portfolio/",
        "/contact/",
        "/about/",
        "/faq/",
        "/holiday-wallet-calculator/",
        "/privacy-policy/",
        "/terms-and-conditions/",
        "/refund-cancellation-policy/",
        "/security-deposit/",
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
