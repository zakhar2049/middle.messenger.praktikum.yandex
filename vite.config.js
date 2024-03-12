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
                resolve(__dirname, 'src/authorization.html'),
                resolve(__dirname, 'src/chats.html'),
                resolve(__dirname, 'src/error404.html'),
                resolve(__dirname, 'src/error500.html'),
                resolve(__dirname, 'src/profile.html'),
                resolve(__dirname, 'src/registration.html'),
            ],
        },
    },
    plugins:[
        handlebars()
    ],
})
