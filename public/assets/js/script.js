$('#form').on('submit', function (event) {
    $.ajax("/api/burgers/orders", {
        type: "POST",
        data: { burger_name: $('#burger').val() }
    }).then(function (response) {
        //console.log(response);
        location.reload();
    })
});

$(".eatBtn").on("click", function (event) {
    //event.preventDefault();
    const id = $(this).data("id");

    $.ajax({
        method: "PUT",
        url: "/api/burgers/orders/" + id,
        data: { isEaten: true }
    }).then(function (response) {
        //console.log(response);
        location.reload();
    });
});

$(".throwAwayBtn").on("click", function (event) {
    //event.preventDefault();
    const id = $(this).data("id");

    $.ajax({
        method: "DELETE",
        url: "/api/burgers/orders/" + id
    }).then(function (response) {
        //console.log(response);
        location.reload();
    });
});