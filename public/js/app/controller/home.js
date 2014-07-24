(function(app, $, crossroads, indexSidebarTemplate) {

    var
        renderSideBar = function(decks) {
            app.sidebar.render(app.mapper.deckToSidebar(decks));
        },

        index = function() {
            app.region.clearRegion(app.region.main);
            app.service.getDecks().done(renderSideBar);

        }; // end index 

    app.initialized.add(function() {
        crossroads.addRoute('home', index);
    });


})(app, $, crossroads, app.templates.sidebarListTemplate);
