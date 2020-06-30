const approuter = require("@sap/approuter")();
const {featureFlagRouter} = require("sap-cf-features");

approuter.beforeRequestHandler.use(
  '/feature-flags', featureFlagRouter(true)
);

approuter.start();
