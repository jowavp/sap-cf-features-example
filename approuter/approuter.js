const approuter = require("@sap/approuter")();
const {featureFlagRouter} = require("sap-cf-features");

// req.user.tenant contains the name of the tenant.
approuter.beforeRequestHandler.use(
  '/feature-flags', featureFlagRouter( (req) => req.user.tenant, true)
);

approuter.start();
