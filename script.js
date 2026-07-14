function calculateBill() {
    let name = document.getElementById("customerName").value;
    let units = parseInt(document.getElementById("unitsConsumed").value);

    let result = document.getElementById("result")

    if (name.trim() == "") {
        alert("Please fill all field");
        return;
    }

    if (units < 0) {
        alert("Units should be greater than 0");
        return;
    }

    let bill = 0;
    if (units <= 100) {
        bill = units * 5;
    }
    

    result.innerHTML = `<h3>Customer Name : ${name}</h3>
    <h3>Units Consumed : ${units}</h3>
    <h3>Total Bill:${bill}</h3>`
}


function reset() {
    document.getElementById("customerName").value = ""
    document.getElementById("unitsConsumed").value = ""
    document.getElementById("result").innerHTML = ""
    result.innerHTML = `<h3> Result</h3>`
}