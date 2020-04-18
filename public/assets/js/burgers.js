$(() => {
  $(".create-form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#burgerName").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });

    $(".devour").on("click", function () {
      const id = $(this).attr("data-id");

      // Send the PUT request.
      $.ajax(`/api/burgers/${id}/devoured`, {
        type: "PUT"
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
});
