let save_users = null;

$().ready(() => {
    console.log("hello");
    $.getJSON("http://localhost:55555/api/users")
        .done((users) => {
            saved_users = users;
            console.log("Users: ", users);
            display();
        })
        .fail((err) => {
            console.log("Error: ", err);
        });
    console.log("goodbye");
});

const display = () => {
    let tbody = $("#usertbody");
    tbody.html("");
    for (let user of saved_users) {
        let tr = $("<tr></tr>");
        let tId = `<td>${user.id}</td>`;
        let tName = `<td>${user.firstName} ${user.lastName}</td>`;
        let tPhone = `<td>${user.phone}</td>`;
        let tEmail = `<td>${user.email}</td>`;
        tr.html(tId + tName + tPhone + tEmail);
        tbody.append(tr);
    }
};