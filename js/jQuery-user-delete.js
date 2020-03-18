$().ready(() => {
    $.ajax({
        method: "DELETE",
        url: "http://localhost:55555/api/users/3",
        data: null,
        contentType: "application/json"
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error("Error: ", err);
        });
});