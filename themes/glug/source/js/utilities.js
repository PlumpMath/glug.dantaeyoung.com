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
    /*
     * $.post("php/getpost.php", function(data) {
        console.log(data);
    });

    $.post("http://localhost:4000/php/getpost.php", "momo", function(data) {
        console.log(data);
    });
    */
//    $('.lazyYT').lazyYT();
});


