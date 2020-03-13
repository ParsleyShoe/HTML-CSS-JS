let num = 0;
$().ready(() => {
    $("#number").val("0").css("text-align", "center");

    $("#minus").click(() => {
        num--;
        show();
    });

    $("#plus").click(() => {
        num++;
        show();
    });
});

const show = () => {
    $("#number").val(num)
                .css("color", "black")
                .css("font-style", "normal")
                .css("font-weight", "normal");
    if (num % 2 == 0) $("#number").css("color", "red");
    if (num % 3 == 0) $("#number").css("font-style", "italic");
    if (num % 5 == 0) $("#number").css("font-weight", "bold");
}