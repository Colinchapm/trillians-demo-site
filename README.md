# Trillians Rock Homepage Demo

A polished React/Vite homepage concept for Trillians Rockbar. The demo presents a dark concert-style landing page with bold calls to action for gigs, tickets, table drinks, merch, comedy nights, The Wrong Channel and performer applications.

## Run Locally

```bash
npm.cmd install
npm.cmd run dev
```

Open the local Vite URL shown in the terminal.

## Build

```bash
npm.cmd run build
```

## Docker

```bash
docker build -t trillians-demo-site .
docker run --rm -p 8080:80 trillians-demo-site
```

Then open `http://localhost:8080`.

## Images

The Trillians logo is served from `public/images/trillians-logo.jpg`. Supporting placeholder artwork lives under `public/images` and can be replaced with production concert, drinks, merch and show assets.
