$(document).ready(function () {
  $(".devour-form").on("submit", function (event) {
    event.preventDefault();

    var taco_id = $(this).children(".taco_id").val();
    console.log(taco_id);
    $.ajax({
      method: "PUT",
      url: "/tacos/" + taco_id,
    }).then(function (data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });
});
