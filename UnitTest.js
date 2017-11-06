

function canLie (a) {


    if (click) {
        a--;
        return a;
    } else {
        return a;
    }



}


var unitTest = {};

unitTest.testLie = function (method) {
    var num1 = 3
    var result = num1 - 1;

    if (method(num1) === result){
        true
    } else {
        false
    }

};

console.log(unitTest.testLie(canLie));