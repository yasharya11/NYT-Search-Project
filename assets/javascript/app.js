


$("#search").on("click", function () { 
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var searchTerm = $("#search-term").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    var limitRecords = parseInt($("#number-records").val());
    alert(limitRecords);
    limitRecords = limitRecords; 
    searchTerm = searchTerm; 
    startYear = startYear + "0101"; 
    endYear = endYear + "0101"; 

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
            var title = result.response.docs[i].headline.main;
            var author = result.response.docs[i].byline.original;
            var publicationDate = result.response.docs[i].pub_date;
            var articleLink = result.response.docs[i].web_url;

            console.log((i+1)+"))))/////////////////////");
            console.log(title);
            console.log(author);
            console.log(publicationDate);
            console.log(articleLink);

            //$("#articles").append("<div class='articleBody'><div class='articleTitle>"+title+"</div><div class='articleAuthor'>"+author+"</div></div>")
            var articleBody = $("<div class='articleBody'>");
            var articleTitle = $("<div class='articleTitle'>");
            articleTitle.text(title);
            var articleAuthor = $("<div class='articleAuthor'>");
            articleAuthor.text(author);
            
            articleBody.append(articleTitle);
            articleBody.append(articleAuthor);

            $("#articles").append(articleBody);

        }
    }).fail(function (err) {
        throw err
    });

});