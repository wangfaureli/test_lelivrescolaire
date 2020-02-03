let n0 = 0;
let n1 = 1;

function displayFibonacci() {
    let ntemp = 0;
    let rgbHue = 255 / 99;
    let fibonacciDiv = document.querySelector(".fibonacci");

    fibonacciDiv.innerHTML = "";
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div");

        if (n0 == 0) {
            i = 2;
            let firstDiv = document.createElement("div");
            let secondDiv = document.createElement("div");
            firstDiv.innerHTML = n0;
            secondDiv.innerHTML = n1;
            secondDiv.style.color = `rgb(${rgbHue}, ${rgbHue}, ${rgbHue})`;
            fibonacciDiv.appendChild(firstDiv);
            fibonacciDiv.appendChild(secondDiv);
            rgbHue += 255 / 99;
        }
        ntemp = n0 + n1;
        n0 = n1;
        n1 = ntemp;
        div.innerHTML = n1;
        div.style.color = `rgb(${rgbHue}, ${rgbHue}, ${rgbHue})`;
        fibonacciDiv.appendChild(div);
        rgbHue += 255 / 99;
    }
}

function main() {
    displayFibonacci();
}

main();