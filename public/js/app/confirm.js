(function(app, $, template) {

    app.confirm = function(view, next) {
        var model = {
            body: view,
            title: 'Confirm'
        };

        var modalBody = template(model);

        app.region.show(app.region.modal, modalBody);

        var $modal = $(app.region.modal).find('.modal');

        $modal.modal('show').one('click', '.js-confirm', function(e) {
            $modal.modal("hide");
            next();
        });
    };
}(app, jQuery, app.templates.modalTemplate));
