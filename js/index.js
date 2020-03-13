const clickme = () => {
    let ctrl = document.getElementById("inp");
    let lblCtrl = document.getElementById("lbl");
    lblCtrl.innerHTML = `<h4>${ctrl.value}</h4>`;
}

const addTheTwo = () => {
    let op1 = +(document.getElementById("op1").value);
    let op2 = +(document.getElementById("op2").value);
    let outputLabel = document.getElementById("output");
    let answer = op1 + op2;
    if (answer % 3 == 0) {
        outputLabel.style.color = "blue";
    } else {
        outputLabel.style.color = "black";
    }
    outputLabel.innerHTML = answer;
}

const add = () => {
    let sum = 0;
    let answer = document.getElementById("output2");
    let input = +(document.getElementById("input2").value);
    answer.innerHTML = +answer.value + input;
}
const clear = () => {
    let op1 = +(document.getElementById("op1").value);
    let op2 = +(document.getElementById("op2").value);
    let outputLabel = document.getElementById("output");
    outputLabel.innerHTML = op1 + op2;
}