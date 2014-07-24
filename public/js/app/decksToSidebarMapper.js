(function(app) {
    app.mapper = app.mapper || {};
    var map = function(items, itemMapper) {
        var result = [];
        for (var i = items.length - 1; i >= 0; i--) {
            result.push(itemMapper(items[i]));
        };

        return result;
    };

    app.mapper.deckToSidebar = function(decks) {
        var i = map(decks, function(item) {
            return {
                href: 'deck/' + item._id,
                name: item.name
            };
        });
        i.push({
            href: 'deck/new',
            name: 'Add new'
        });
        return {
            items: i
        };
    };

    app.mapper.cardToSidebar = function(cards) {
        var i = map(cards, function(item) {
            return {
                href: 'cards/' + item._id,
                name: item.name
            };
        });
        i.push({
            href: 'cards/new',
            name: 'Add new'
        });
        return {
            items: i
        };
    };
}(app));
