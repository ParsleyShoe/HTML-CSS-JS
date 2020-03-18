let saved_vendor = null;

$().ready(() => {
    console.log("hello");
    $.getJSON("http://localhost:55555/api/vendors/1")
        .done((vendor) => {
            saved_vendor = vendor;
            console.log("Vendor: ", vendor);
            display();
        })
        .fail((err) => {
            console.error("Error: ", err);
        });
    console.log("goodbye");
});

const display = () => {
    $("#tid").text(saved_vendor.id);
    $("#tcode").text(saved_vendor.code);
    $("#tname").text(saved_vendor.name);
    $("#taddress").text(saved_vendor.address);
    $("#tcity").text(saved_vendor.city);
    $("#tstate").text(saved_vendor.state);
    $("#tzip").text(saved_vendor.zip);
    $("#tphone").text(saved_vendor.phone);
    $("#temail").text(saved_vendor.email);
};