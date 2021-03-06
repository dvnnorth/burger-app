$(() => {
    $(".eatme").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            type: "PUT",
            url: "/api/burgers/" + $(this).data("id")
        })
            .then(() => {
                location.reload();
            });
    });
    $("#orderSubmit").on("click", (event) => {
        event.preventDefault();

        let data = {
            burgerName: $("#burgerOrderForm").val().trim()
        }

        if (data.burgerName) {
            $("#badInput").remove();
            $.ajax({
                type: "POST",
                url: "/api/burgers",
                data: data
            })
                .then(() => {
                    location.reload();
                });
        }
        else {
            console.log($("#badInput").length);
            if (!$("#badInput").length) {
                $("#burgerOrder")
                    .append(
                        $("<p>")
                            .attr("class", "text-danger")
                            .attr("id", "badInput")
                            .text("Invalid input"));
            }
        }
    });
});