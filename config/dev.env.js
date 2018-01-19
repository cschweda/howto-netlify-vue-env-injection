"use strict";

let env;

// Check to see if 'env.js' exists. If not, use default env.apiKey
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
  NODE_ENV: '"development"',
  // Inject variable into vue app via Webpack define
  API_KEY: JSON.stringify(process.env.API_KEY || env.apiKey)
});
