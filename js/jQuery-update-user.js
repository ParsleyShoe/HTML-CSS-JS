let user = {
    id: 3,
    username: "parsleyshoe",
    password: "ThisParsleyIsOnFire",
    firstName: "Par",
    lastName: "Win",
    phone: "123-456-7890",
    email: null,
    isReviewer: true,
    isAdmin: false
};

$().ready(() => {
    $.ajax({
        method: "PUT",
        url: "http://localhost:55555/api/users/3",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error("Error: ", err);
        });
});