/*global app, $, crossroads,hasher*/
/*jslint nomen: true */
/*deck controller*/
(function(app, $, crossroads, newDeckTemplate, service, hasher, DeckLayout) {
    'use strict';
    var readDeck = function(form) {
            var result = {},
                cardNodes = form.querySelectorAll("form input[name^='Card']"),
                i;

            result.name = form.querySelector("form input[name='deckName']").value;
            result._id = form.querySelector("form input[name='id']").value;
            result.cards = [];
            for (i = cardNodes.length - 1; i >= 0; i -= 1) {
                result.cards.push(cardNodes.item(i).value);
            }
            return result;
        },
        goHome = function() {
            hasher.setHash('home');
        },
        formSubmit = function(e) {
            e.preventDefault();
            var deck = readDeck(app.region.main);
            if (deck._id) {
                service.updateDeck(deck).done(goHome);
            } else {
                service.newDeck(deck).done(goHome);
            }
        },
        deleteDeck = function(deck) {
            service.deleteDeck(deck).done(goHome);
        },
        setupEditFrom = function(deck) {
            var
                form = newDeckTemplate(deck),
                deleteButton;
            app.region.show(app.region.main, form);
            form = app.region.main;
            form.querySelector('form').addEventListener('submit', formSubmit);
            deleteButton = form.querySelector('#deleteButton');
            if (deleteButton) {
                deleteButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    deleteDeck(deck);
                });
            }
        },
        renderSideBar = function(decks) {
            app.sidebar.render(app.mapper.deckToSidebar(decks));
        },
        getEmptyDeck = function() {
            return {
                name: '',
                _id: '',
                cards: [null, null, null]
            };
        },
        newDeck = function() {
            var layout = new DeckLayout(getEmptyDeck());
            layout.render();
            app.service.getDecks().done(renderSideBar);
        },
        editDeck = function(id) {
            service.getDeck(id).done(function(deck) {
                if (deck) {
                    debugger;
                    var layout = new DeckLayout(deck);
                    layout.render();
                }
            });
            service.getDecks().done(renderSideBar);
        };
    app.initialized.add(function() {
        crossroads.addRoute('deck/new', newDeck);
        crossroads.addRoute('deck/{id}', editDeck);
    });
}(app, $, crossroads, app.templates.newDeckTemplate, app.service, hasher, app.layouts.DeckLayout));
