(function(app){
	app.region = {};
	app.region.main = document.getElementById('main-region');
	app.region.clearRegion = function(node){

		while (node.hasChildNodes()) {
    		node.removeChild(node.lastChild);
		}
	};
}(app));