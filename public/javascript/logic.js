$(document).ready(()=>{
    $(".change-devoured").on("click", (event) => {
        let id = $(this).data("id");
        let newDevoured = $(this).data("newDevoured");

        let newDevouredState = {
            devoured: newDevoured
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(() => {
            console.log("changed devoured to", newDevoured);
            location.reload();
        });
    });

    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
            name: $("#burger-name").val().trim(),
            devoured: false
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(()=>{
            console.log("created new burger");
            location.reload();
        });
    });
});