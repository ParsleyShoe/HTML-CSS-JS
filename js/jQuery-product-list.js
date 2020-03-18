let saved_products = null;

$().ready(() => {
    console.log("hello");
    $.getJSON("http://localhost:55555/api/products")
        .done((products) => {
            saved_products = products;
            console.log("Products: ", products);
            display();
        })
        .fail((err) => {
            console.log("Error: ", err);
        });
    console.log("goodbye");
});

const display = () => {
    let tbody = $("#producttbody");
    tbody.html("");
    for (let product of saved_products) {
        let tr = $("<tr></tr>");
        let tId = `<td>${product.id}</td>`;
        let tPartNumber = `<td>${product.partNumber}</td>`;
        let tName = `<td>${product.name}</td>`;
        let tPrice = `<td>${product.price}</td>`;
        let tUnit = `<td>${product.unit}</td>`;
        let tVendor = `<td>${product.vendor.name}</td>`;
        tr.html(tId + tPartNumber + tName + tPrice + tUnit + tVendor);
        tbody.append(tr);
    }
};