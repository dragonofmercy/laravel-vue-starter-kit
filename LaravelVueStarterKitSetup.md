# Laravel Vue Starter Kit

A **lightweight** starter kit for Laravel with Vue 3 and Inertia.js — without the bloat of other official starter kits.

## 🎯 Philosophy

This starter kit is intentionally minimal and unopinionated. It provides only the bare essentials to kickstart a Laravel + Vue 3 application via Inertia.js, leaving you free to structure your project however you see fit.

## ✨ Tech Stack

### Back-end
- **[Laravel 13](https://laravel.com/)** — PHP 8.4+
- **[Inertia.js (Laravel)](https://inertiajs.com/)** ^3.0 — Bridge between Laravel and Vue
- **[Ziggy](https://github.com/tighten/ziggy)** ^2.6 — Laravel routes accessible on the client side

### Front-end
- **[Vue 3](https://vuejs.org/)** ^3.5 — Reactive JavaScript framework
- **[Inertia.js (Vue 3)](https://inertiajs.com/)** ^3.0 — Vue adapter for Inertia
- **[Tailwind CSS 4](https://tailwindcss.com/)** ^4.0 — Utility-first CSS framework
- **[Vue I18n](https://vue-i18n.intlify.dev/)** ^11.3 — Internationalization
- **[Vite 8](https://vite.dev/)** ^8.0 — Lightning-fast bundler

### Tooling
- **[vite-plugin-mkcert](https://github.com/liuweiGL/vite-plugin-mkcert)** — Automatic local HTTPS
- **[laravel-vite-plugin](https://github.com/laravel/vite-plugin)** ^3.0 — Vite/Laravel integration

## 🚀 Getting Started

### Requirements

- PHP >= 8.4
- Composer
- Node.js >= 20
- npm

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/dragonofmercy/laravel-vue-starter-kit.git
   cd laravel-vue-starter-kit
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Set up the environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Create the SQLite database** *(default)*
   ```bash
   php artisan migrate
   ```

6. **Start the development server**
   ```bash
   # In two separate terminals:
   php artisan serve
   npm run dev

   # Or using concurrently (single terminal):
   npx concurrently "php artisan serve" "npm run dev"
   ```

## License

This package is open-sourced software licensed under the [MIT license](LICENSE).

## Support

If this project helps to increase your productivity, you can give me a cup of coffee :)

<a href="https://ko-fi.com/dragonofmercy" target="_blank"><img src="https://cdn.ko-fi.com/cdn/kofi2.png?v=3" alt="Donate" width="160px" /></a>