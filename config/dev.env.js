"use strict";

let env;

// Check to see if 'env.js' exists. If not, use default env.apiKey.
// Comment this out and simply 'require(./env.js)' if you want to force the build to fail
// when 'env.js' is missing.
try {
  env = require("./env.js");
} catch (e) {
  if (e.code !== "MODULE_NOT_FOUND") {
    throw e;
  }
  env = {
    apiKey: "API_KEY_NOT_FOUND"
  };
}

const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  DEPLOY_URL: JSON.stringify(process.env.DEPLOY_URL || "NOT_DEFINED"),
  URL: JSON.stringify(process.env.URL || "NOT_DEFINED"),
  NODE_ENV: '"development"',
  REPOSITORY_URL: JSON.stringify(process.env.REPOSITORY_URL || "NOT_DEFINED"),
  // Inject variable into vue app via Webpack define
  API_KEY: JSON.stringify(process.env.API_KEY || env.apiKey),
  NODE_VERSION: JSON.stringify(process.env.NODE_VERSION || "NOT_DEFINED")
});
