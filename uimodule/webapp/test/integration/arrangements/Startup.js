sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("com.flexso.cf.featuresexample.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "com.flexso.cf.featuresexample",
          async: true,
          manifest: true
        }
      });
    }

  });
});
