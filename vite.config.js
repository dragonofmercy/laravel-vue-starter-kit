import { defineConfig } from 'vite';
import inertia from '@inertiajs/vite'
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import mkcert from 'vite-plugin-mkcert';
import vue from '@vitejs/plugin-vue';
import * as path from "node:path";

export default defineConfig({
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "./resources/js") }
        ]
    },
    plugins: [
        inertia(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        mkcert(),
    ],
    server: {
        https: true,
        watch: {
            ignored: [
                '**/app/**',
                '**/storage/**',
                '**/vendor/**',
                '**/node_modules/**'
            ],
        },
    },
});
