var a = [3,5,7,8]

function reverseArray(input) {
    var value = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        value.push(input[i]);
    }
    return value;
}

var b = reverseArray(a);

console.log(b);