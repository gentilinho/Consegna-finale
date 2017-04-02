$('#more').on('click', function () {
    $.ajax({
        dataType: "html"
        , url: "post.html"
        , success: function (htmlCheDeveArrivare) {
            $(".post").after(htmlCheDeveArrivare);
        }
    });
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
        url: root + '/photos/1'
        , method: 'GET'
    }).then(function (data) {
        console.log(data);
    });
});