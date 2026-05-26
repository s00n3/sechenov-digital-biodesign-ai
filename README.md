# Институт цифрового биодизайна и ИИ в медицине

Многостраничный статический сайт на Astro + Decap CMS для Института цифрового биодизайна и искусственного интеллекта в медицине Сеченовского Университета.

## Стек

- Astro
- Markdown/MDX content collections
- Decap CMS
- Локальные IBM Plex Sans / IBM Plex Mono

## Запуск

```bash
npm install
npm run dev
```

Сайт будет доступен на `http://127.0.0.1:4321/`.

## Админка

Админка доступна на `/admin/`.

Для локального режима редактирования без GitHub/Netlify-логина запустите второй процесс:

```bash
npm run cms
```

Production-режим Decap CMS настраивается в `public/admin/config.yml`.

## Сборка

```bash
npm run build
```

Статические файлы появляются в `dist/`.
