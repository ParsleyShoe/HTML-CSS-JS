let saved_vendors = null;

$().ready(() => {
    console.log("hello");
    $.getJSON("http://localhost:55555/api/vendors")
        .done((vendors) => {
            saved_vendors = vendors;
            console.log("Vendors: ", vendors);
            display();
        })
        .fail((err) => {
            console.log("Error: ", err);
        });
    console.log("goodbye");
});

const display = () => {
    let tbody = $("#vendortbody");
    tbody.html("");
    for (let vendor of saved_vendors) {
        let tr = $("<tr></tr>");
        let tId = `<td>${vendor.id}</td>`;
        let tCode = `<td>${vendor.code}</td>`;
        let tName = `<td>${vendor.name}</td>`;
        let tAddress = `<td>${vendor.address}</td>`;
        let tCity = `<td>${vendor.city}</td>`;
        let tState = `<td>${vendor.state}</td>`;
        let tZIP = `<td>${vendor.zip}</td>`;
        let tPhone = `<td>${vendor.phone}</td>`;
        let tEmail = `<td>${vendor.email}</td>`;
        tr.html(tId + tCode + tName + tAddress + tCity + tState + tZIP + tPhone + tEmail);
        tbody.append(tr);
    }
};