let vendor = {
    id: 0,
    code: "xx",
    name: "xx",
    address: "xx",
    city: "xx",
    state: "xx",
    zip: "12345",
    phone: null,
    email: null
};

$().ready(() => {
    $.ajax({
        method: "POST",
        url: "http://localhost:55555/api/vendors",
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error("Error: ", err);
        });
});