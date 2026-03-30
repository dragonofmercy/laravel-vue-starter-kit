import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from "../../vendor/tightenco/ziggy/src/js/index.js";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: title => (title ? `${title} | ${appName}` : appName),
    resolve: name => resolvePageComponent(
        `./pages/${name}.vue`,
        import.meta.glob('./pages/**/*.vue', {eager: true})
    ),
    setup({el, App, props, plugin}){
        createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue)
            .mount(el)
    },
}).then();