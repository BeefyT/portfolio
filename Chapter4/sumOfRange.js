
var array = [1,2,3,4,5,6,7,8,9,10];

function sumOfRange(){
    var total=0;
    for(var i=0; i<array.length; i++){
        total = total+array[i];
    }

    return total;

}

console.log(sumOfRange(array));