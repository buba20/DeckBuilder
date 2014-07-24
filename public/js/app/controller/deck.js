/*deck controller*/
(function(app, $, crossroads, newDeckTemplate, service, hasher) {

    var readDeck = function(form) {
            var result = {};
            result.name = form.querySelector("form input[name='deckName']").value;
            result._id = form.querySelector("form input[name='id']").value;
            result.cards = [];

            var cardNodes = form.querySelectorAll("form input[name^='Card']");
            for (var i = cardNodes.length - 1; i >= 0; i--) {
                result.cards.push(cardNodes.item(i).value);
            };

            return result;
        },

        formSubmit = function(e) {
            e.preventDefault();
            var deck = readDeck(app.region.main);
            deck._id ? 
            service.updateDeck(deck).done(goHome) : 
            service.newDeck(deck).done(goHome);;
        },

        setupEditFrom = function(deck) {
            var form = newDeckTemplate({
                name: deck.name,
                id: deck._id
            });

            app.region.show(app.region.main, form);
            form = app.region.main;

            form.querySelector('form').addEventListener('submit', formSubmit);

            var deleteButton = form.querySelector('#deleteButton');
            if (deleteButton) {
                deleteButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    deleteDeck(deck);
                });
            }
        },
        deleteDeck = function(deck) {
            service.deleteDeck(deck).done(goHome);
        },
        renderSideBar = function(decks) {
            app.sidebar.render(app.mapper.deckToSidebar(decks));
        },

        newDeck = function() {
            setupEditFrom({
                name: '',
                id: ''
            });
            app.service.getDecks().done(renderSideBar);
        },

        editDeck = function(id) {
            service.getDeck(id).done(setupEditFrom);
            service.getDecks().done(renderSideBar);
        },
        goHome = function() {
            hasher.setHash('home');
        };

    app.initialized.add(function() {
        crossroads.addRoute('deck/new', newDeck);
        crossroads.addRoute('deck/{id}', editDeck);
    });

})(app, $, crossroads, app.templates.newDeckTemplate, app.service, hasher);
