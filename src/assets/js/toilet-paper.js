var ToiletPaperModule = (function () {

    function init(initValues) {

        var url = "https://tp.0browser.com";
        //var url = "http://localhost:7001";

        $.ajax({
            type: "GET",
            url: url
        }).done(function (results) {
            if (results) {
                var container = $('.toiletpapers');
                $.each(results, function (index, toiletPaper) {
                    container.append( 
                        '<div class="card">' +
                        '<img src="' + toiletPaper.imageData + '" class="card-img-top"  alt="image">' +
                        '<div class="card-body">' +
                        '<h6 class="card-title mb-1 text-muted">' + toiletPaper.price + '</h6>' +
                        '<h6 class="card-text">' + toiletPaper.title + '</h6>' +
                        '</div>' +
                        '</div>' 
                    );
                });
            }
        }).fail(function (err) {

                        });
    }

    return {
                            Init: init
    };
})();