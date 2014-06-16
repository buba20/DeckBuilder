(function(app, $, crossroads, indexViewTemplate) {
    
    var index = function() {

        app.service.getDeck(function(data) {
    
        	app.region.clearRegion(app.region.main);
    		data['newDeckLink'] = '#/deck/new';
            var el = indexViewTemplate(data);
    
            app.region.main.innerHTML = el;
    
        });
    
    }; // end index 

    
    app.initialized.add(function() {
        crossroads.addRoute('home', index);
    });


})(app, $, crossroads,app.templates.deckListTemplate);
