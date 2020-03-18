let vendor = {
    id: 4,
    code: "4736",
    name: "New Vendor",
    address: "1798 Your Road",
    city: "Toronto",
    state: "CN",
    zip: "12345",
    phone: null,
    email: null
};

$().ready(() => {
    $.ajax({
        method: "PUT",
        url: "http://localhost:55555/api/vendors/4",
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