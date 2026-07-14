function calculateBill() {
    let name = document.getElementById("customerName").value;
    let units = parseInt(document.getElementById("unitsConsumed").value);

    let result = document.getElementById("result")

    if (name.trim() == ""|| isNaN(units)) {
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
    else if (units <= 200 && units > 100) {
        bill = 500 + ((units-100) * 7);
    }
    else {
        bill = 1200 + ((units-200) * 10);
    }

    result.innerHTML = `<h3>Customer Name : ${name}</h3>
    <h3>Units Consumed : ${units}</h3>
    <h3>Total Bill:Rs ${bill}</h3>`
}


function reset() {
    document.getElementById("customerName").value = ""
    document.getElementById("unitsConsumed").value = ""
    document.getElementById("result").innerHTML = ""
    result.innerHTML = `<h3> Result</h3>`
}