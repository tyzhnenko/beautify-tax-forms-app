import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import * as path from 'path';
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    // depending on your application, base can also be "/"
    define: {
        'process.env': process.env
    },
    base: '',
    plugins: [
        react(),
        viteTsconfigPaths(),
        visualizer({
            template: "treemap", // or sunburst
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: "analyse.html", // will be saved in project's root
        }) as PluginOption
    ],
    resolve: {
        // alias: [{ find: "@", replacement: "/src" }],
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
        ],
    },
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000
        port: 3000,
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    "react": ["react", "react-dom", "react-router-dom"],
                    "material-tailwind-react": ["@material-tailwind/react"],
                    "framer-motion": ["framer-motion"],
                    "floating-ui-react": ["@floating-ui/react"],
                }

            }
        }
    }
})
