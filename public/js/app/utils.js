app = app || {}
app.utils = app.utils || {}
app.utils.convertFormToJSON = function(documentElement, middleware) {
    var json = {},
        formArray = $(documentElement).find('form').serializeArray();

    jQuery.each(formArray, function(i, field) {
        json[field.name] = field.value;
    });

    if (middleware) {
        middleware(json);
    }

    return json;
};

app.utils.imageThumbnail = function(inputElement, thumbnailElement) {
    
    var renderThumbnail = function() {
    	var reader = new FileReader();
    	
    	reader.onload = function(event) {
    		thumbnailElement.src = event.target.result;
    	};

    	reader.readAsDataURL(this.files[0]);
    	};

    inputElement.addEventListener("change", renderThumbnail, false);    
};
