$(function () {
    $('.like').on('click', function () {
        $.post('/like/inc', function (data) {
            console.log('inc:' + data);
            updateCount();
        });
    });

    var updateCount = function () {
        $.get('/like/', function (data) {
            console.log('update:' + data);
            $('#like-count').val(data);
        });
    };

    updateCount();
});
