var pin = "";

function pinPush(input) {
    pin = pin + input;
    if (pin.length === 4) {
        window.setTimeout(function () {
            checkPin();
        }, 500);
    }
    document.getElementById("keypad-display").innerText = pin;
}

function pinDelete() {
    pin = pin.substring(0, pin.length - 1);
    document.getElementById("keypad-display").innerText = pin;
}

function checkPin() {
    if (pin === "2785") {
        window.location.href = "title.html"
    } else if (pin.length < 4) {
        document.getElementById("keypad-display").innerText = "Pin is too short!";
        pin = "";
        window.setTimeout(function () {
            document.getElementById("keypad-display").innerText = "";
        }, 700);
    } else {
        document.getElementById("keypad-display").innerText = "Pin is incorrect!";
        pin = "";
        window.setTimeout(function () {
            document.getElementById("keypad-display").innerText = "";
        }, 700);
    }
}