function displayFibonacci() {
    let n0 = 0;
    let n1 = 1;
    let ntemp = 0;

    // document.write(n0);
    // document.write('<br>');
    // document.write(n1);
    // document.write('<br>');
    document.getElementById("fibonacci").innerHTML = document.getElementById("fibonacci").innerHTML + "<br>" + n0;
    document.getElementById("fibonacci").innerHTML = document.getElementById("fibonacci").innerHTML + "<br>" + n1;
    for (let i = 0; i < 98; i++) {
        ntemp = n0 + n1;
        n0 = n1;
        n1 = ntemp;
        // document.write(n1);
        document.getElementById("fibonacci").innerHTML = document.getElementById("fibonacci").innerHTML + "<br>" + n1;
        // document.write('<br>');
        // console.log(n1);
    }
}

displayFibonacci();