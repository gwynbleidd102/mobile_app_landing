import { defineConfig } from 'vite';

export default defineConfig({
    // подключение модулей, плагинов, отдельных css если надо

    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
