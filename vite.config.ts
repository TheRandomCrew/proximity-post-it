import reactRefresh from '@vitejs/plugin-react-refresh'
import bundleVisualizer from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

function getBundleVisualizerPlugin() {
  return {
    ...bundleVisualizer({
      template: 'treemap', // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    apply: 'build',
    enforce: 'post',
  } as Plugin
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    svgr(),
    tsconfigPaths(),
    process.env.BUNDLE_ANALYZE === '1' && getBundleVisualizerPlugin(),
  ].filter(Boolean),
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
})
