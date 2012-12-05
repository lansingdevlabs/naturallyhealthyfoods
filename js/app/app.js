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
        console.info("hiding");
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
			description: "Baked with organic wheat flour and Real Aged Cheddar, these Cheddar Bunnies are great tasting and wholesome. They are ideal for toddler-sized hands, but their crispy crunch and real cheesy flavor will tempt snackers of all ages to eat them by the handful.",
			url: "http://www.annies.com/",
			spriteClass: "annies-homegrown"
		}),
		App.Product.create({
			name: "Brothers-All-Natural Fruit Crisps",
			description: "Fresh fruit is not always available for you and your family to eat. Whether people are at work, in the car or traveling, they need to find a new alternative to get their daily fruits. Brothers-All-Natural Fruit Crisps are the 100% freeze-dried fruit snack you want to be eating to achieve that goal.",
			url: "http://www.brothersallnatural.com/",
			spriteClass: "brothers-all-natural"
			
		}),
		App.Product.create({
			name: "Clif Bar",
			description: "It’s the first Clif Bar made, and it’s still everything they stand for. Whole, organic ingredients. Performance nutrition. And great taste. Whether you’re on a 150-mile bike ride or exploring a new trail, this energy bar is built to sustain your adventure.",
			url: "http://www.clifbar.com/",
			spriteClass: "clif-bar"
		}),
		App.Product.create({
			name: "Clif Mojo Bar",
			description: "Everyone gets a craving for something sweet and salty. It’s all about different flavors and textures to satisfy your sweet (and salty) tooth. Add in some crunchy nuts and you get a delicious snack your body will dig.",
			url: "http://www.clifbar.com/",
			spriteClass: "clif-mojo-bar"
		}),
		App.Product.create({
			name: "Clif Kid Twisted Fruit",
			description: "Each one is organic fruit puree twisted into a fun rope shape that is easy to take anywhere kids are on the move. They are even equal to one serving of fruit!",
			url: "http://www.clifbar.com/",
			spriteClass: "clif-twisted-fruit"
		}),
		App.Product.create({
			name: "Clif Kid Z Bar",
			description: "Each bar is 95% organic, made with 8-11g of whole grains, and contains 12 essential vitamins and minerals. What you won't find are any of the no-no's",
			url: "http://www.clifbar.com/",
			spriteClass: "clif-z-bar"
		}),
		App.Product.create({
			name: "Glaceau Vitamin Water",
			description: "Lookin' for something to satisfy your thirst. Come and get some. This thing is filled with antioxidants to fight those free radicals, to get your body going and to quench that thirst.",
			url: "http://www.vitaminwater.com/",
			spriteClass: "glaceau-vitamin-water"
		}),
		App.Product.create({
			name: "Kashi TLC Cruncy Granola Bar",
			description: "Treat yourself to some tender loving care ... Tasty Little Crunchies granola bars. Starting with a unique combination of Seven Whole Grains and Sesame, and bake them up with the wholesome goodness of roasted nuts, whole seeds, and warm spices. And with 4g of Fiber and 6-7g of Protein, these crunchy granola bars are as nourishing as they are tasty.",
			url: "http://www.kashi.com/",
			spriteClass: "kashi-tlc-crunchy-granola-bar"
		}),
		App.Product.create({
			name: "Luna Bar",
			description: "How can something so good for us be so delicious? It’s simple. Start with the best ingredients possible (nothing artificial, 70% organic) and nutrition that matters most to women. Mix with flavors that make mouths water and the rest is sweet (and healthy!) history.",
			url: "http://www.lunabar.com/",
			spriteClass: "luna-bar"
		}),
		App.Product.create({
			name: "Materne GoGo Squeez",
			description: "100% natural fruits meet these signature innovative packaging to bring you a healthy snack even the busiest of families can enjoy—anytime, anywhere.",
			url: "http://www.gogosqueez.com/",
			spriteClass: "materne-gogo-squeez"
		}),
		App.Product.create({
			name: "Stacy's All-Natural Pita Chips",
			description: "Check these parmesan and garlic herb pita chips out. The secret to the flavor is there are no secrets - nothing artificial. Only real parmesan cheese, garlic and parsley, baked right into the dough.",
			url: "http://www.stacyssnacks.com/",
			spriteClass: "stacys-all-natural-pita-chips"
		}),
		App.Product.create({
			name: "Stretch Island Fruit Leather",
			description: "Original fruit strips make nutritious snacking on the go a tasty experience. Discover the goodness in every original fruit strip. These are a 100% natural 1/2 serving of fruit. That means no artificial additives and only real-fruit puree.",
			url: "http://www.stretchislandfruit.com/",
			spriteClass: "stretch-island-fruit-leather"
		}),
		App.Product.create({
			name: "V8 Fusion",
			description: "Did you know you can eat the veggies while tasting the fruit. Get a full serving of vegetables and a full serving of fruit in every glass.",
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
$(function() {
    App.initialize();
})
