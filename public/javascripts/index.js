$(function () {
    $('.like').on('click', function () {
        $.post('/like/inc', function (data) {
            updateCount();
        });
    });

    var updateCount = function () {
        $.get('/like', function (data) {
            $('#like-count').val(data);
        });
    };

    updateCount();
});
