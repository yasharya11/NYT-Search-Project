


$("#search").on("click", function () { 
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var searchTerm = $("#search-term").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    var limitRecords = parseInt($("#number-records").val());
    //alert(limitRecords);
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
            var aTitle = result.response.docs[i].headline.main;
            var author = result.response.docs[i].byline.original;
            var publicationDate = result.response.docs[i].pub_date;
            var articleLink = result.response.docs[i].web_url;

            console.log((i+1)+"))))/////////////////////");
            console.log(aTitle);
            console.log(author);
            console.log(publicationDate);
            console.log(articleLink);

            //$("#articles").append("<div class='articleBody'><div class='articleTitle>"+title+"</div><div class='articleAuthor'>"+author+"</div></div>")
            var articleBody = $("<div class='articleBody'>");
            var publicationDateDiv = $("<div class='publicationDate'>");
            var iDiv = $("<div class='iDiv'>");
            var articleLinkDiv = $("<div class='articleLink'>");
            var articleTitle = $("<div class='articleTitle'>");
            articleTitle.text(aTitle);
            var articleAuthor = $("<div class='articleAuthor'>");
            articleAuthor.text(author);
            
            iDiv.text(i+1);
            articleBody.append(iDiv);
            
            articleBody.append(articleTitle);
            articleBody.append(articleAuthor);

            articleLinkDiv.append(articleLink);
            articleBody.append(articleLinkDiv);

            publicationDateDiv.append(publicationDate);
            articleBody.append(publicationDateDiv);

            $("#articles").append(articleBody);

        }
    }).fail(function (err) {
        throw err
    });

});