sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("blogDemo.controller.DemoView", {
		
		onInit: function () {
			var model = new sap.ui.model.json.JSONModel();
			model.setData({
				number: 0
			});
			this.getView().setModel(model, "view");	
		},
		
		showMessage: function () {
			// doku zu formatMessage formatter: http://veui5infra:8080/demokit/#docs/api/symbols/jQuery.sap.html#.formatMessage
			
			
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var oViewModel = this.getView().getModel("view");
			oViewModel.setProperty("/number", oViewModel.getProperty("/number") + 1);
			var oText = oResourceBundle.getText("donateText", [oViewModel.getProperty("/number")]);

			

			sap.m.MessageToast.show(oText);
		}

	});

});