let pnr = "";

function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "admin" && p === "1234") {
        window.location.href = "index.html";
    } else {
        alert("Invalid Login");
    }
}

function reserve() {
    let name = document.getElementById("name").value;
    let train = document.getElementById("train").value;
    let cls = document.getElementById("classType").value;

    pnr = "PNR" + Math.floor(Math.random() * 10000);

    document.getElementById("output").innerHTML =
        "Reservation Successful<br>" +
        "Name: " + name + "<br>" +
        "Train: " + train + "<br>" +
        "Class: " + cls + "<br>" +
        "PNR: " + pnr;
}

function cancel() {
    if (pnr === "") {
        document.getElementById("output").innerHTML = "No ticket found";
    } else {
        document.getElementById("output").innerHTML =
            "Ticket " + pnr + " cancelled";
        pnr = "";
    }
}
