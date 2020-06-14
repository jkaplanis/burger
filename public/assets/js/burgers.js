$(() => {
  // Listen for submission of new burger and do a POST request
  $(".newBurger").on("submit", event => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burgerName").val().trim()
    };

    $.ajax({
      url: "/api/burgers",
      type: "POST",
      data: newBurger
    }).then(() => {
      location.reload();
    });
  });
  // Listen for click on devour button and do a PUT request
  $(".devour").on("click", function () {
    const id = $(this).attr("data-id");

    $.ajax(`/api/burgers/${id}/devoured`, {
      type: "PUT"
    }).then(() => {
      location.reload();
    });
  });
  // Listen for click on trash button and do a PUT request
  $(".trash").on("click", function () {
    const id = $(this).attr("data-id");

    $.ajax(`/api/burgers/${id}/trashed`, {
      type: "DELETE"
    }).then(() => {
      location.reload();
    });
  });
});
