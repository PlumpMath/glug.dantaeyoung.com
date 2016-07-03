var getUrlValue = function(VarSearch){
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for(var i = 0; i < VariableArray.length; i++){
        var KeyValuePair = VariableArray[i].split('=');
        if(KeyValuePair[0] === VarSearch){
            return KeyValuePair[1];
        }
    }
}

$(function() {
	var converter = new showdown.Converter();
	$(".markdown").each(function(i) {
		$(this).html(converter.makeHtml($(this).html()));
	});
    $('.lazyYT').lazyYT();
});


