(function(app, $, crossroads, template) {
	
	app.sidebar = {} ;
	var region = app.region.sidebar;
	app.sidebar.render = function(models){
		var v = template(models);
		app.region.show(region,v);
	};

	app.sidebar.mapper = function (items,mapDefinition) {
		var results = {items:[]};
		for (var i = items.length - 1; i >= 0; i--) {
			results.items.push(mapDefinition(items[i]));
		};
		return results;
	};

}(app, $, crossroads, app.templates.sidebarListTemplate));
