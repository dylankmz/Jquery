// 1.0 select the fourth element with jquery then add the class "found" to the NEXT element
$(".js-selectme")
  .next()
  .addClass("found");

// 2.0 select the js-list-two with jquery then search for spans and give them the class "found"
$(".js-list-two")
  .find("span")
  .addClass("found");
// 3.0 hide the odd list items for 1 second and reveal then back
$(".js-list-three li:nth-child(odd)")
  .hide(1000)
  .show(3000);
