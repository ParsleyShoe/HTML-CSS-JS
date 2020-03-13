const go = () => {
    let p = document.getElementById("list");
    let list = [];
    for (let i = 1; i <= 100; i++) {
        let value = "";
        if (i % 3 == 0) value += "Fizz";
        if (i % 5 == 0) value += "Buzz";
        list.push(value || i);
    }
    p.innerText = list.join(", ");
}