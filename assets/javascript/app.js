$("#click").on("click", function(){


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "0248edaaa01447969a49a7fc8a67657b",
        'q': "Bitcoins",
        'start_date': 2008,
        'end_date': 2011
    });
    $.ajax({
        url: url,
        method: 'GET'
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });
    


});