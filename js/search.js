// Example JSONP request with jQuery
var url = window.location.href;
var host = window.location.host;
// Determine which api extension to use based on the current url
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
            // create links for results
            var link = $('<a/>', {
                'href': this.links.web.href,
                'target': '_blank'
            }).append(this.headline);
            var h5 = $("<h5/>").append(link);          
            ul.append(h5)
        });
        // append this list to the document body
        $('#response').append(ul);
    },
    error: function(xhr, ajaxOptions, thrownError) {
        alert(xhr.statusText);
        alert(thrownError);
    }
});