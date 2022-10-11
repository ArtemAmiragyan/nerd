import laravel from 'laravel-vite-plugin'
import vue from "@vitejs/plugin-vue";
import { defineConfig } from 'vite'
const path = require('path')

export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/sass/app.scss',
            'resources/js/app.ts',
        ]),
    ],
    resolve:{
        alias:{
            '@' : path.resolve(__dirname, 'resources/js')
        },
    },
})
