function displayFibonacci() {

    let n0 = 0;
    let n1 = 1;
    let ntemp = 0;
    let u = 0;

    for (let i = 0; i < 98; i++) {
        if (u == 0) {
            document.getElementById("fibonacci").innerHTML = "<div style='color: rgb("+u+","+u+","+u+")'>" + document.getElementById("fibonacci").innerHTML + "<br>" + n0 + "</div>";
            document.getElementById("fibonacci").innerHTML = "<div style='color: rgb("+u+","+u+","+u+")'>" + document.getElementById("fibonacci").innerHTML + "<br>" + n1 + "</div>";
        }
        ntemp = n0 + n1;
        n0 = n1;
        n1 = ntemp;
        document.getElementById("fibonacci").innerHTML = "<div style='color: rgb("+u+","+u+","+u+")'>" + document.getElementById("fibonacci").innerHTML + "<br>" + n1 + "</div>";
        u = u + 3;
    }
}

displayFibonacci();