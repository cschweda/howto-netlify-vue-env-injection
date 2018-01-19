"use strict";
module.exports = {
  NODE_ENV: '"production"',
  // https://www.netlify.com/docs/continuous-deployment/
  DEPLOY_URL: JSON.stringify(process.env.DEPLOY_URL || "NOT_DEFINED"),
  URL: JSON.stringify(process.env.URL || "NOT_DEFINED"),
  REPOSITORY_URL: JSON.stringify(process.env.REPOSITORY_URL || "NOT_DEFINED"),
  //
  // This will fetch the API key from the build variable set in the control panel
  API_KEY: JSON.stringify(process.env.API_KEY || "NOT_DEFINED")
};
