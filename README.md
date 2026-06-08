# Trillians Digital Demo Site

A clean React/Vite demo site for Trillians covering gig discovery, ticket calls to action, drinks ordering, merch, comedy nights, cult video programming, performer applications and a contact form mockup.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Docker

```bash
docker build -t trillians-demo-site .
docker run --rm -p 8080:80 trillians-demo-site
```

Then open `http://localhost:8080`.

## Images

The site ships with SVG placeholder fallbacks under `public/images`:

- `public/images/hero/trillians-stage-placeholder.svg`
- `public/images/drinks/table-ordering-placeholder.svg`
- `public/images/merch/merch-shelf-placeholder.svg`
- `public/images/shows/show-placeholder.svg`

Replace those files or update the CSS URLs when production or locally generated imagery is available.
