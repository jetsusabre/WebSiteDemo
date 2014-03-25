// Example JSONP request with jQuery
var url = window.location.href;
var host = window.location.host;
if(url.indexOf('http://' + host + '/home') != -1) {
    var apiExtension = "basketball/mens-college-basketball/teams/183/news";
}
else if (url.indexOf('http://' + host + '/sabres') != -1) {
    var apiExtension = "hockey/nhl/news";   
}
else{
    var apiExtension = "football/nfl/news";       
};

$.ajax({
    url: "http://api.espn.com/v1/sports/" + apiExtension,
    data: {
        // developer api key
        apikey: "axhjxp8bv837mayrrqnhtaux",
        // type of data expected back from the api
        _accept: "application/json"
    },
    dataType: "jsonp",
    success: function(data) {
        // create an unordered list of results
        var ul = $('<ul/>');
        $.each(data.headlines, function() {            
            var li = $('<li/>').text(this.headline);
            ul.append(li)
        });
        // append this list to the document body
        $('#response').append(ul);
    },
    error: function() {
         // console.log("Error with API");
    }
});