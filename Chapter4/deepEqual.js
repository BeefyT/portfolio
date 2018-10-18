
const value1 = "Hello";
const value2 = "Hello";

var value3 = {"Alpha":"Puffin"};
var value4 = {color:500};

function deepEqual(value1, value2){
    var type1 = typeof value1;
    var type2 = typeof value2;

    //var foo = { 'alpha' : 'puffin', 'beta' : 'beagle' };
//var keys = Object.keys(foo); // ['alpha', 'beta'] 
// (or maybe some other order, keys are unordered).



    if(type1 ==="object" && type2 === "object"){
        var objType = Object.keys(type1);
        var objType2 = Object.keys(type2);

        console.log(objType);
        console.log(objType2);

        if(objType === objType2){
            return true;
        }
        else{
            return false;
        }

    }
    else{

    if(type1===type2){
        return true;
    }
    else{
        return false;
    }
}

}

console.log(deepEqual(value1,value2));
console.log(deepEqual(value3,value4));