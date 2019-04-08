function fizzbuzz() {
}

fizzbuzz.prototype.play = function (number) {
    var output = "";
    if (this._isDivisibleBy(3, number)) {
        output += "fizz"
    }
    if (this._isDivisibleBy(5, number)) {
        output += "buzz"
    }
    if (this._isNotDivisibleBy(3, 5, number)) {
        output = number
    }
    return output
}
fizzbuzz.prototype._isDivisibleBy = function (divisor, number) {
    return number % divisor === 0;
}

fizzbuzz.prototype._isNotDivisibleBy = function (divisor_1, divisor_2, number) {
    return number % divisor_1 != 0 && number % divisor_2 != 0
}

var formfizzbuzz = document.getElementById("form");

formfizzbuzz.onsubmit = function (evt) {
    var num = document.getElementById("numberone").value;
    var ber = document.getElementById("numbertwo").value;
    var number = (num+ber);
    evt.preventDefault();
    var fizbuzz = new fizzbuzz();
    if (number === "") {
        alert("введите номер")
    } else {
        alert(fizbuzz.play(number));
    }

}

//I could not figure out how to make the program count them from lower to upper. 
//I looked up the prototype syntax and functionality. I will study it since less than an hour is not enough time for me to fully understand it.
