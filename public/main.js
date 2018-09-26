
let dogs = []

$("button").click(function () {
    $.get("dogs", function (result) {
dogs = result
renderView()
    })
});

const renderView = function(){
const source = document.getElementById("dogs-template").innerHTML;
const template = Handlebars.compile(source);
const html = template({ dogs })
$(".dogContainer").empty().append(html)
};