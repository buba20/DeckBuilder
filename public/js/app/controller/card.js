(function(app, $, crossroads, listTemplate, service, hasher, newCardTemplate, undefined) {

    var
        renderSideBar = function(cards) {
            app.sidebar.render(app.mapper.cardToSidebar(cards));
        },
        setupImageThumbnail = function() {

            var fileInput = app.region.main.querySelector('input[type="file"]');
            var thumbnailNode = app.region.main.querySelector('.thumbnail img');
            var anchor = app.region.main.querySelector('a.thumbnail').addEventListener('click', function(e) {
                e.preventDefault();
                fileInput.click();
            });
            app.utils.imageThumbnail(fileInput, thumbnailNode);
        },
        index = function() {
            service.cards.getAll().done(function(data) {
                renderSideBar(data);
                var html = listTemplate({
                    cards: data
                });
                app.region.show(app.region.main, html);
            });
        },

        newCard = function() {

            service.cards.cardType.getAll().done(function(data) {
                var html = newCardTemplate({
                    cardTypes: data
                });

                app.region.show(app.region.main, html);
                app.region.main.querySelector('form input[type=submit]').addEventListener('click', submitAddForm);
                setupImageThumbnail();
                service.cards.getAll().done(renderSideBar);
            });
        },

        edit = function(id) {
            service.cards.cardType.getAll().done(function(data) {
                var cardTypes = data;

                service.cards.get(id).done(function(card) {
                    if(card === null){
                        goHome();
                    }
                    
                    card.cardTypes = cardTypes;
                    setSelected(card.cardTypes, card.cardType);

                    var html = newCardTemplate(card);
                    app.region.show(app.region.main, html);

                    app.region.main.querySelector('form').addEventListener('submit', submitEditForm);
                    var deleteButton = app.region.main.querySelector('#deleteButton');

                    if (deleteButton) {
                        deleteButton.addEventListener('click', function(e) {
                            e.preventDefault();
                            deleteCard(card);
                        });
                    }

                    service.cards.getAll().done(renderSideBar);
                });
            });
        },

        setSelected = function(types, toSelect) {
            for (var i = types.length - 1; i >= 0; i--) {
                if (types[i]._id === toSelect) {
                    types[i].selected = true;
                    return;
                }
            };
        },

        submitAddForm = function(e) {
            e.preventDefault();


            var oData = new FormData(document.forms[0]);

            $.ajax({
                url: "api/card",
                type: "PUT",
                data: oData,
                processData: false, // tell jQuery not to process the data
                contentType: false // tell jQuery not to set contentType
            }).done(function() {
                hasher.setHash('cards');
            });


            return;

            var model = app.utils.convertFormToJSON(app.region.main, parseModel);
            model.image = app.region.main.querySelector('img').src;
            app.service.cards.newCard(model, function(data) {
                hasher.setHash('cards');
            });
        },

        submitEditForm = function(e) {
            e.preventDefault();
            var oData = new FormData(document.forms[0]);
            $.ajax({
                url: "api/card",
                type: "POST",
                data: oData,
                processData: false, // tell jQuery not to process the data
                contentType: false // tell jQuery not to set contentType
            });


            return;





            var model = app.utils.convertFormToJSON(app.region.main, parseModel);
            app.service.cards.update(model, function(data) {
                hasher.setHash('cards');
            });
        },
        deleteCard = function(card) {
            app.service.cards.delete(card).done(goHome);
        },
        goHome = function() {
            hasher.setHash('cards');

        };

    app.initialized.add(function() {
        crossroads.addRoute('cards', index);
        crossroads.addRoute('cards/new', newCard);
        crossroads.addRoute('cards/{id}', edit);
    });

})(app, $, crossroads, app.templates.cardsListTemplate, app.service, hasher, app.templates.newCardTemplate);
