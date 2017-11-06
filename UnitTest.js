

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
    var num1 = 3;
    var result = num1 - 1;

    if (method(num1) === result){
        return true;
    } else {
         return false;
    }

};

// console.log(unitTest.testLie(canLie));

/*function checkDeck2(x,z){
    var deck1 = [a,b,c];
    var deck2 = [d,e,a];


    if (click == a){
        x = a;
        z = x.contain.call(deck2,a);
        return true;
    } else {
       return false;
    }
}*/

function checkDeck(Array,card) {

    var isAmatch = false;
    for(i=0,i<Array.length; i++;){
        if(card===Array[i]){
            isAmatch = true;
        }
    }
}

unitTest.testCheckTrue = function (method) {
    var Array = [1, 2, 3, 4, 5];
    var num2 = 5;
    var result = true;

    if (method(num1, num2) === result) {
       return true;
    } else {
        return false;
    }
};

    unitTest.testCheckFalse = function (method) {
        var Array = [1,2,3,4,5];
        var num2 = 6;
        var result = false;

        if (method(num1,num2) === result){
            return true;
        } else {
            return false;
        }


    };


console.log(unitTest.testCheckTrue(checkDeck));
console.log(unitTest.testCheckFalse(checkDeck));