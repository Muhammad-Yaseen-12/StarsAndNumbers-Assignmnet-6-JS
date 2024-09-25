var a = prompt("Please insert your value");
var starsOutput = document.getElementById("stars");
var numbersOutput = document.getElementById("numbers");
starsOutput.innerHTML = "";
numbersOutput.innerHTML = "";
for (var i = 1; i <= a; i++) {
    for (var j = 1; j <= i; j++) {
        starsOutput.innerHTML += " * ";
    }
    starsOutput.innerHTML += "<br>";
}
for (var i = 1; i <= a; i++) {
    for (var j = 1; j <= i; j++) {
        numbersOutput.innerHTML += j + "&nbsp;&nbsp;";
    }
    numbersOutput.innerHTML += "<br>";
}

