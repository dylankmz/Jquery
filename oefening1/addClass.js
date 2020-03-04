//  Add the active class on click and remove it from the other elements
$(".block").on("mouseover", function() {
  //Om eerst alle classe te verwijderen en daarna pas ze toe te kunnen voegen.
  $(".js-block").removeClass("active");
  $(this).addClass("active");
});

$(".block").on("mouseleave", function() {
  $(this).removeClass("active");
});
