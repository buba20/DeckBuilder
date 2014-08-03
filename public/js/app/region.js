(function(app) {
    app.region = {};

    app.region.main = document.getElementById('main-region');
    app.region.sidebar = document.getElementById('sidebar-region');
    app.region.modal = document.getElementById('modal-region');

    app.region.show = function(region, html) {
        app.region.clearRegion(region);
        if (typeof(html) === 'string') {
            region.innerHTML = html;
        } else if (html instanceof HTMLElement) {
            region.appendChild(html);
        } else {
            throw new Error('Unsuported html type: ' + typeof(html));
        }

    };

    app.region.clearRegion = function(node) {

        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }
    };

}(app));
