sap.ui.define([
  "sap/ui/test/Opa5",
  "com/flexso/cf/featuresexample/test/integration/arrangements/Startup",
  "com/flexso/cf/featuresexample/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
