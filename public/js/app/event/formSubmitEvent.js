(function (app) {
    var formSubmitEvent = function () {},
        submitForm = function (e) {
            e.preventDefault();
            var data = new FormData(e.target);
            app.service.newDeck(data).done(function(){
                hasher.setHash('home');
            });
        }
    formSubmitEvent.prototype = Object.create(app.event.prototype);
    formSubmitEvent.prototype.constructor = formSubmitEvent;
    formSubmitEvent.prototype.applayTo = function (view) {
        var selectElement = view.getParentNode().querySelector('form');
        selectElement.addEventListener('submit', submitForm, false);
    }
    app.events = app.events || {};
    app.events.FormSubmitEvent = formSubmitEvent;
}(app));
