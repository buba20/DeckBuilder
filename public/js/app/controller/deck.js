/*deck controller*/
(function (app,$,crossroads) {
	
var newDeck  = function () {
	console.log(' new deck');
};

app.initialized.add(function(){
	crossroads.addRoute('deck/new',newDeck);
});

})(app,$,crossroads);