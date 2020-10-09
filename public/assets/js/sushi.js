$(function () {

    $(".eatenBtn").on("click", function (event) {
        var id = $(this).data("id");

        var eatenState = {
            eaten: true
        }

        console.log(id + " eat button pressed")

        $.ajax("/api/sushi/" + id, {
            type: "PUT",
            data: eatenState
        }).then(
            function () {
                console.log("sent recieved responce");
                location.reload();
            }
        );
    });

    $(".submitSushi").on("submit", function (event) {

        event.preventDefault();

        var nameState = {
            name: $("#su").val().trim()
        }

        $.ajax("/api/sushi", {
            type: "POST",
            data: nameState
        }).then(
            function () {
                console.log("created new sushi");
                location.reload();
            }
        );
    });

});