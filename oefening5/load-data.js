$(function() {
  $.getJSON("data.json", function(obj) {
    console.log(obj);

    // Add Groupletter to menu
    for (const key in obj) {
      const element = obj[key];
      console.log(`forin: ${element}`);
    }
    // Create section per Group [A, B, C, D]

    // Add names to the section

    // If clicked on group => show group
  });
});
