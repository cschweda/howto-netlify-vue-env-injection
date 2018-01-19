"use strict";
const env = require("./env.js");
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // Set API_KEY as Netlify build variable
  // DEPLOY_URL is already defined during a Netlify deploy
  //
  // See: https://www.netlify.com/blog/2016/10/04/access-local-environment-variables-using-webpack/
  //
  //
  API_KEY: JSON.stringify(process.env.API_KEY || env.apiKey)
});
