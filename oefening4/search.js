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
  let rep = $(".js-replace-text").val();
  $(".js-list li").html();
  $(".js-list li:contains(" + word + ")").each(function(index) {
    let listWord = $(this).text();
    console.log(listWord);
    let res = listWord.replace(word, rep);
    console.log(res);
    $(this)
      .text(res)
      .removeClass("found");
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
$(".js-reset").on("click", function() {
  $(".group input").val("");
});
