import {defineConfig} from "vite";
import {resolve} from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
    server: {
        port: 3000,
    },
    root: resolve(__dirname, 'src'),
    publicDir: resolve(__dirname, 'static'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        rollupOptions: {
            input: [
                resolve(__dirname, 'src/index.html'),
                resolve(__dirname, 'src/pages/authorization/authorization.html'),
                resolve(__dirname, 'src/pages/chats/chats.html'),
                resolve(__dirname, 'src/pages/error404/error404.html'),
                resolve(__dirname, 'src/pages/error500/error500.html'),
                resolve(__dirname, 'src/pages/profile/profile.html'),
                resolve(__dirname, 'src/pages/registration/registration.html'),
            ],
        },
    },
    plugins:[
        handlebars()
    ],
})
