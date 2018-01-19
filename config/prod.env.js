"use strict";
module.exports = {
  NODE_ENV: '"production"',
  DEPLOY_URL: JSON.stringify(process.env.DEPLOY_URL || "production"),
  API_KEY: JSON.stringify(process.env.API_KEY || "production")
};
