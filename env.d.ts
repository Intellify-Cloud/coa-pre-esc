/// <reference types="vite/client" />

declare const __APP_BUILD_ID__: string

declare module 'virtual:cabana-mio-assets' {
  const assets: string[]
  export default assets
}
