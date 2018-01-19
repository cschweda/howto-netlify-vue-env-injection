# Use Netlify build variables in a Vue SPA

Recently, I wrote an app to query the New York Times API for a list of the top stories in each of the paper's main sections. In order to query the API, I needed a key. As is the case with most API keys, the key is tied to my NYT account and has usage restrictions (a limited amount of API queries per minute, for example.)

I wanted to deploy the finished app on Netlify, but I realized that in order to do so, I had to publically expose the key in my Github repo. Several users on Netlify's Gitter channel suggested I look into Netlify's build environment variables. These custom variables allow me to specify a key (or any variable) outside of the app and inject it into the app with Webpack, thereby preventing me from publically exposing it in my repo.

### The Bad News

The process I outline below works fine, but since static, Single Page Applications are 100% client-side, the API key (or any similiarly injected variable) is embedded in plain-text in the final client bundle(s). An intrepid console logger, after searching through the minified, mangled source would eventually stumble on it.

In addition, the API key (in the case of my NYT app, at least) is readily exposed in Chrome's 'dev tools' when viewing XHR requests.

The good news is that the method I describe here allows you to `.gitignore` the file containing your key and not expose it in your public repo. For low impact deployments -- or for quick testing -- the method here is workable. A more robust, secure solution would involve fetching the data server-side and then rendering it to the client. Nuxt (or Next) would be top contenders for this approach.

## Build setup

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

## Background

Build environment variables allow you to define specific values within your application depending on the context of the current, running environment. When using Netlify, several build environment variables are pre-defined in every deployment:

```
- REPOSITORY_URL: URL to the Git repository the build pulls changes from.

- BRANCH: Reference to check out after fetching changes from the Git repository.

- PULL_REQUEST: Whether the build is from a pull request or not.

- HEAD: Name of the head branch received from a Git provider.

- COMMIT_REF: Reference of the commit we’re building.

- CONTEXT: Name of the context a deploy is built around -- production, deploy-preview or branch-deploy.
```

In addition, Netlify pre-defines three URL build variables:

```
- URL: This URL represents the main address to your site.

- DEPLOY_URL: This URL represents the unique URL for an individual deploy.

- DEPLOY_PRIME_URL: This URL represents the primary URL for an individual deploy.
```

For more detail on these and additional build settings, see Netlify's [excellent documentation on continuous deployment](https://www.netlify.com/docs/continuous-deployment/).

## Configuration
