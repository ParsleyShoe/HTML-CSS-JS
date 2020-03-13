let cToF = () => {
    let F = document.getElementById("out1");
    let C = document.getElementById("C");
    F.value = Math.round((+C.value * 9 / 5) + 32) + "°F";
    C.value += "°C";
}
let fToC = () => {
    let C = document.getElementById("out2");
    let F = document.getElementById("F");
    C.value = Math.round((+F.value - 32) * 5 / 9) + "°C";
    F.value += "°F";
}