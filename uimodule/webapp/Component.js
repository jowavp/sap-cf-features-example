sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "sap/ui/model/json/JSONModel",
  "com/flexso/cf/featuresexample/model/models"
], function(UIComponent, Device, JSONModel, models) {
  "use strict";

  return UIComponent.extend("com.flexso.cf.featuresexample.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");

      var oModel = new JSONModel();
      oModel.loadData("/feature-flags/").then(
        (function () {

          var data = oModel.getData();
          oModel.setData({
            flags: Object.keys(data).map(
                function (key) {
                  return {
                    key: key,
                    value: data[key]
                  };
                }
              )
          });

          this.setModel(oModel, "features");

        }).bind(this)
      );
    }
  });
});
