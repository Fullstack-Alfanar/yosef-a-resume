$(document).ready(() => {
    $("#fillBtn").on("click", () => {
        let first = $("#firstNumIn");
        let second = $("#secondNumIn");
        if (first.val() != "" && first.val() != null && first.val() >= 0 && second.val() != "" && second.val() != null && first.val() <= second.val()) {
            $("#error").hide();
            $("#dropDown").empty();

            for (let i = first.val(); i <= second.val(); i++) {
                $("#dropDown").append($(`<option value="${i}">${i}</option>`));
            }

        } else {
            $("#error").text("Wrong input").show();
        }
    });
});