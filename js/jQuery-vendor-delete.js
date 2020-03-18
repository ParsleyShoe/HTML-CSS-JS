$().ready(() => {
    $.ajax({
        method: "DELETE",
        url: "http://localhost:55555/api/vendors/4",
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