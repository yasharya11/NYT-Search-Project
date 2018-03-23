$("#search").on("click", function () {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var limitRecords = 5; //this will be changed to form input
    var searchTerm = "Bitcoins"; //this will be changed to form input
    var startYear = 20000506; //this will be changed to form input
    var endYear = 20180606; //this will be changed to form input

    url += '?' + $.param({
        'api-key': "0248edaaa01447969a49a7fc8a67657b",
        'q': searchTerm,
        'begin_date': startYear,
        'end_date': endYear
    });


    $.ajax({
        url: url,
        method: 'GET'
    }).done(function (result) {
        for (var i = 0; i < limitRecords; i++) {
            var aTitle = result.response.docs[i].headline.main;
            var author = result.response.docs[i].byline.original;
            var publicationDate = result.response.docs[i].pub_date;
            var articleLink = result.response.docs[i].web_url;

            console.log((i+1)+"))))/////////////////////");
            console.log(aTitle);
            console.log(author);
            console.log(publicationDate);
            console.log(articleLink);

            $("#articles").append("<div class='articleBody'><div class='articleTitle'>"+aTitle+"</div><div class='articleAuthor'>"+author+"</div><div class='articlePublicationDate'>"+publicationDate+"</div><div class='articleLink'>"+articleLink+"</div></div>");
        }
    }).fail(function (err) {
        throw err
    });

});