function displayFibonacci() {
    let n0 = 0;
    let n1 = 1;
    let ntemp = 0;

    console.log(n0);
    console.log(n1);
    for (let i = 0; i < 98; i++) {
        ntemp = n0 + n1;
        n0 = n1;
        n1 = ntemp;
        console.log(n1);
    }
}

displayFibonacci();