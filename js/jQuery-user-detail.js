let saved_user = null;

$().ready(() => {
    console.log("hello");
    $.getJSON("http://localhost:55555/api/users/1")
        .done((user) => {
            saved_user = user;
            console.log("User: ", user);
            display();
        })
        .fail((err) => {
            console.error("Error: ", err);
        });
    console.log("goodbye");
});

const display = () => {
    $("#tid").text(saved_user.id);
    $("#tname").text(`${saved_user.firstName} ${saved_user.lastName}`);
    $("#tphone").text(saved_user.phone);
    $("#temail").text(saved_user.email);
};