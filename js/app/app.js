// create application
App = Em.Application.create();

App.ApplicationView = Em.View.extend({
	templateName: "applicationTemplate"
});

// views
App.HomeView = Em.View.extend({
	templateName: "homeTemplate"
});

App.AboutView = Em.View.extend({
	templateName: "aboutTemplate"
});

App.ProductsView = Em.View.extend({
	templateName: "productsTemplate"
});

App.ContactView = Em.View.extend({
	templateName: "contactTemplate"
});

// controllers
App.ApplicationController = Em.Controller.extend({

});

App.HomeController = Em.Controller.extend({

});

App.AboutController = Em.Controller.extend({

});

App.ProductsController = Em.Controller.extend({

});

App.ContactController = Em.Controller.extend({

});

// router
App.Router =  Em.Router.extend({
	root: Em.Route.extend({
		goHome: Em.Route.transitionTo("home"),
		goAbout: Em.Route.transitionTo("about"),
		goProducts: Em.Route.transitionTo("products"),
		goContact: Em.Route.transitionTo("contact"),
		home: Em.Route.extend({
			route: "/",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("home");
				$(".nav-collapse").collapse('hide');
			}
		}),
		about: Em.Route.extend({
			route: "/about",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("about");
				$(".nav-collapse").collapse('hide');
			}
		}),
		products: Em.Route.extend({
			route: "/products",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("products");
				$(".nav-collapse").collapse('hide');
			}
		}),
		contact: Em.Route.extend({
			route: "/contact",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("contact");
				$(".nav-collapse").collapse('hide');
			}
		})
	})
});

// initialize application
App.initialize();

