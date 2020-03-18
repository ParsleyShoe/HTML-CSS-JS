let saved_vendors = [];
let product = {};

$().ready(() => {
    console.log("hello");
    $.getJSON("http://localhost:55555/api/vendors")
        .done((vendors) => {
            saved_vendors = vendors;
            console.log("vendors: ", vendors);
            load();
        })
        .fail((err) => {
            console.log("Error: ", err);
        });
    console.log("goodbye");
});

const load = () => {
    let vlist = $("#vendor-list");
    for (let vendor of saved_vendors) {
        vlist.append(`<option value="${vendor.id}">${vendor.name}</option>`);
    }
};

const save = () => {
    product.partNumber = $("#partnumber").val();
    product.name = $("#name").val();
    product.price = +$("#price").val();
    product.unit = $("#unit").val();
    product.vendorId = +$("#vendor-list").val();
    console.log(product);
};