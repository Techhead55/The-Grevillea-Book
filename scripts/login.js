var pin = "";
var chatRef = new Firebase('https://thegrevilleabook.firebaseio.com/');
var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {});

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
window.onkeydown = function (e){
    e = e || window.event;
    switch (e.keyCode){
        case 48 :
            pinPush(0);
            break;
        case 49 :
            pinPush(1);
            break;
        case 50 :
            pinPush(2);
            break;
        case 51 :
            pinPush(3);
            break;
        case 52 :
            pinPush(4);
            break;
        case 53 :
            pinPush(5);
            break;
        case 54 :
            pinPush(6);
            break;
        case 55 :
            pinPush(7);
            break;
        case 56 :
            pinPush(8);
            break;
        case 57 :
            pinPush(9);
            break;
        case 96 :
            pinPush(0);
            break;
        case 97 :
            pinPush(1);
            break;
        case 98 :
            pinPush(2);
            break;
        case 99 :
            pinPush(3);
            break;
        case 100 :
            pinPush(4);
            break;
        case 101 :
            pinPush(5);
            break;
        case 102 :
            pinPush(6);
            break;
        case 103 :
            pinPush(7);
            break;
        case 104 :
            pinPush(8);
            break;
        case 105 :
            pinPush(9);
            break;
    }
}
