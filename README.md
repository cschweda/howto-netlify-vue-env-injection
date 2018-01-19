# Use Netlify build variables in Vue

Demo of how to inject Netlify's build environment variables (via Webpack's `Define` plugin) into a Vue instance. This is especially useful for deploying apps with senstive API keys.

Since this app is 100% client-side, the API key (or any similiarly injected variable) **is** embedded in final client bundle(s). However, the method described below allows you to `.gitignore` the key file in your repo.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Configuration

Build environment variables allow you to define specific values within your application depending on the context of the current, running environment.
