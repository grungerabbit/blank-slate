(function($){
	var welcome = {
		'config' : {
			'module' : $(""),
		},
                
		'init' : function() {
			var main = welcome.mainMethods();
			main.setup();
		},
		'mainMethods' : function() {
			function fittype() {
				$("#masthead").fitText(0.55);	
			}     
			          
			return {
				setup: function() {
					fittype();
				},
                                
			};
		},
                
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));

function welcomeKO() {
        var self = this;
 
}

// Activates knockout.js
ko.applyBindings(new welcomeKO());