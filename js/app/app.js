// create application
App = Em.Application.create();

App.isCurrentView = function (viewName) {
  return Ember.computed(function() {
    return App.router.currentState.name === viewName;
  }).property('App.router.currentState');
}

App.ApplicationView = Em.View.extend({
	templateName: "applicationTemplate"
});

// views
App.HomeView = Em.View.extend({
	templateName: "homeTemplate"
});

App.MachineView = Em.View.extend({
	templateName: "machineTemplate"
});

App.ProductsView = Em.View.extend({
	templateName: "productsTemplate"
});

App.ContactView = Em.View.extend({
	templateName: "contactTemplate"
});

// controllers
App.ApplicationController = Em.Controller.extend({
	isMachine: App.isCurrentView("machine"),
	isProducts: App.isCurrentView("products"),
	isContact: App.isCurrentView("contact")
});

App.HomeController = Em.Controller.extend({

});

App.MachineController = Em.Controller.extend({

});

App.ProductsController = Em.Controller.extend({

});

App.ContactController = Em.Controller.extend({

});

// router
App.Router =  Em.Router.extend({
	root: Em.Route.extend({
		goHome: Em.Route.transitionTo("home"),
		goMachine: Em.Route.transitionTo("machine"),
		goProducts: Em.Route.transitionTo("products"),
		goContact: Em.Route.transitionTo("contact"),
		home: Em.Route.extend({
			route: "/",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("home");
				$(".nav-collapse").collapse('hide');
				return true;
			}
		}),
		machine: Em.Route.extend({
			route: "/the-machine",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("machine");
				$(".nav-collapse").collapse('hide');
				return true;
			}
		}),
		products: Em.Route.extend({
			route: "/products",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("products");
				$(".nav-collapse").collapse('hide');
				return true;
			}
		}),
		contact: Em.Route.extend({
			route: "/contact",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("contact");
				$(".nav-collapse").collapse('hide');
				return true;
			}
		})
	})
});

// initialize application
App.initialize();
