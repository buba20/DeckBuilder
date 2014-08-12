/*global app*/
(function(app, region, cardSerivice, DeckView) {
    'use strict';

    var deckLayout = function(model) {
        app.Layout.call(this, model);
    };

    deckLayout.prototype = Object.create(app.Layout.prototype);
    deckLayout.prototype.constructor = deckLayout;

    deckLayout.prototype.getViewForCard = function(cardModel, allCards) {
        return cardModel ? new app.views.MiniCardView({
            card: cardModel,
            cards: allCards
        }) : new app.views.EmptyHeroCardView({
            cards: allCards
        });
    };

    deckLayout.prototype.render = function() {
        var layout = this;
        cardSerivice.getAll().done(function(cards) {
            var deckView = new DeckView(layout.model),
                cardsView = [],
                i;

            for (i = 0; i < layout.model.cards.length; i += 1) {
                cardsView.push(layout.getViewForCard(layout.model.cards[i], cards));
            }

            deckView.addCardsViews(cardsView);
            app.region.show(region, deckView.render());
        });
    };

    app.layouts = app.layouts || {};
    app.layouts.DeckLayout = deckLayout;

}(app, app.region.main, app.service.cards, app.views.DeckView));
