(function(app){
	app.region = {};
	
	app.region.main = document.getElementById('main-region');
	app.region.sidebar = document.getElementById('sidebar-region');
	app.region.modal = document.getElementById('modal-region');

	app.region.show = function(region, html){
		app.region.clearRegion(region);
		region.innerHTML = html;
	};

	app.region.clearRegion = function(node){

		while (node.hasChildNodes()) {
    		node.removeChild(node.lastChild);
		}
	};
	
}(app));