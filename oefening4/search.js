// *****************************//
//            Find              //
// *****************************//
$(".js-search").keyup(function() {
  let word = $(".js-search").val();
  console.log(word);

  $(".js-lis li").removeClass("found");
  if (word) {
    $(".js-list li:contains(" + word + ")").addClass("found");
    console.log($(".js-list li:contains(" + word + ")"));
  } else {
    $(".js-list li").removeClass("found");
  }
});

// *****************************//
//           Replace            //
// *****************************//
// Click Replace
$(".js-replace").on("click", function() {
  let word = $(".js-search").val();
  let replace = $(".js-replace-text").val();
  $(".js-list li").html();
  $(".js-list li:contains(" + word + ")").each(function(index) {
    $(this).text(replace);
  });
});

// Press enter input field

// replace text
function findAndReplace(string) {
  // https://api.jquery.com/contains-selector/
}

// *****************************//
//            Reset             //
// *****************************//
