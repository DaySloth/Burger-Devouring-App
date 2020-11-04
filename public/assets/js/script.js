$('#form').on('submit', function (event) {
    event.preventDefault();
    alert("hi");
});

$(".eatBtn").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");

    $.ajax({
        method: "PUT",
        url: "/api/burgers/orders/"+id,
        data: "isEaten = true"
    }).then(function(response){
        console.log(response);
        location.reload();
    });
});