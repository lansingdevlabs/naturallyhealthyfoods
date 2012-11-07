// create application
App = Em.Application.create();

// Determines if the current app state matches the given view.
App.isCurrentView = function (viewName) {
  return Ember.computed(function() {
    return App.router.currentState.name === viewName;
  }).property("App.router.currentState");
};

// views
App.ApplicationView = Em.View.extend({
	templateName: "applicationTemplate"
});

App.HomeView = Em.View.extend({
	templateName: "homeTemplate"
});

App.MachineView = Em.View.extend({
	templateName: "machineTemplate"
});

App.ProductsView = Em.View.extend({
	templateName: "productsTemplate"
});

App.ProductView = Em.View.extend({
	templateName: "productTemplate"
})

App.ContactView = Em.View.extend({
	templateName: "contactTemplate"
});

// controllers
App.ApplicationController = Em.Controller.extend({
	isMachine: App.isCurrentView("machine"),
	isProducts: App.isCurrentView("products"),
	isContact: App.isCurrentView("contact"),
	collapseNavigation: function() {
		$(".nav-collapse").collapse('hide');
	}
});

App.HomeController = Em.Controller.extend({

});

App.MachineController = Em.Controller.extend({

});

App.Product = Em.Object.extend({
	name: "",
	description: "",
	url: "",
	spriteClass: ""
});

App.ProductsController = Em.ArrayController.extend({
	content: [
		App.Product.create({
			name: "Annie's Homegrown Cheddar Bunnies",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.annies.com/",
			spriteClass: "annies-homegrown"
		}),
		App.Product.create({
			name: "Brothers-All-Natural Fruit Crisps",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.brothersallnatural.com/",
			spriteClass: "brothers-all-natural"
			
		}),
		App.Product.create({
			name: "Clif Bar",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.clifbar.com/",
			spriteClass: "clif-bar"
		}),
		App.Product.create({
			name: "Clif Mojo Bar",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.clifbar.com/",
			spriteClass: "clif-mojo-bar"
		}),
		App.Product.create({
			name: "Clif Kid Twisted Fruit",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.clifbar.com/",
			spriteClass: "clif-twisted-fruit"
		}),
		App.Product.create({
			name: "Clif Kid Z Bar",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.clifbar.com/",
			spriteClass: "clif-z-bar"
		}),
		App.Product.create({
			name: "Glaceau Vitamin Water",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.vitaminwater.com/",
			spriteClass: "glaceau-vitamin-water"
		}),
		App.Product.create({
			name: "Kashi TLC Cruncy Granola Bar",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.kashi.com/",
			spriteClass: "kashi-tlc-crunchy-granola-bar"
		}),
		App.Product.create({
			name: "Luna Bar",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.lunabar.com/",
			spriteClass: "luna-bar"
		}),
		App.Product.create({
			name: "Materne GoGo Squeez",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.gogosqueez.com/",
			spriteClass: "materne-gogo-squeez"
		}),
		App.Product.create({
			name: "Stacy's All-Natural Pita Chips",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.stacyssnacks.com/",
			spriteClass: "stacys-all-natural-pita-chips"
		}),
		App.Product.create({
			name: "Stretch Island Fruit Leather",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.stretchislandfruit.com/",
			spriteClass: "stretch-island-fruit-leather"
		}),
		App.Product.create({
			name: "V8 Fusion",
			description: "Cupcake ipsum dolor sit amet chocolate cupcake sugar plum. Bonbon chocolate lollipop powder wypas sweet brownie gingerbread muffin. Lemon drops chupa chups gummies ice cream toffee donut topping. Cookie pie apple pie marshmallow sugar plum lollipop oat cake I love fruitcake. Tootsie roll wafer liquorice dessert jelly. Halvah fruitcake biscuit croissant sugar plum. I love jelly-o icing topping biscuit liquorice. Tiramisu lemon drops ice cream cake candy canes cheesecake. I love pudding cotton candy.",
			url: "http://www.v8juice.com/",
			spriteClass: "v8-fusion"
		})
	]
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
				router.get("applicationController").collapseNavigation();
			}
		}),
		machine: Em.Route.extend({
			route: "/the-machine",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("machine");
				router.get("applicationController").collapseNavigation();
			}
		}),
		products: Em.Route.extend({
			route: "/products",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("products");
				router.get("applicationController").collapseNavigation();
			}
		}),
		contact: Em.Route.extend({
			route: "/contact",
			connectOutlets: function (router, context) {
				router.get("applicationController").connectOutlet("contact");
				router.get("applicationController").collapseNavigation();
			}
		})
	})
});

// initialize application
App.initialize();
