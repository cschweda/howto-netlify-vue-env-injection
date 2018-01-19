"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEPLOY_URL: JSON.stringify(process.env.DEPLOY_URL || "development"),
  API_KEY: JSON.stringify(process.env.API_KEY || "development")
});
