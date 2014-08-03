/*jslint nomen:true */
/*global app*/
(function (app, service) {
    'use strict';
    var cardSelectionChange = function () {
            app.event.call(this);
        },
        selectionChaged = function (cardId, view) {
            service.get(cardId).done(function (card) {
                var parentNode = view.getParentNode(),
                    model = view.getModel();

                model.cards.forEach(function (item, index) {
                    if (item._id === cardId) {
                        item.selected = true;
                    }
                });

                view = new app.views.MiniCardView({
                    cards: model.cards,
                    card: card,
                    selectedId: cardId
                });

                view.setParentNode(parentNode);
                view.render();
            });
        };

    cardSelectionChange.prototype = Object.create(app.event.prototype);
    cardSelectionChange.prototype.constructor = cardSelectionChange;

    cardSelectionChange.prototype.applayTo = function (view) {
        var selectElement = view.getParentNode().querySelector('select');
        selectElement.addEventListener('change', function (e) {
            var cardId = e.target.options[e.target.selectedIndex].value;
            selectionChaged(cardId, view);
        });
    };
    app.events = app.events || {};
    app.events.CardSelectionChange = cardSelectionChange;
}(app, app.service.cards));
