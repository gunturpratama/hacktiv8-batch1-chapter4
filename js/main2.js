$('#test').on('click', function (e) {
    alert('hello world');
})


$('#hello-world').on('click', function (e) {

    $('body').append('<button id="test">test</button>');
})


$('body').on('click', '#test', function (e) {
    alert('hello world');
})


$("#clickme").click(function () {
    $("#book").animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 5000, function () {
        // Animation complete.
    });
});