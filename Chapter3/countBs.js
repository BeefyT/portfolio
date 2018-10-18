
let stringTest = "BigBaboon";

function countBs(stringTest){
    var letter = "B";
    var count = 0;
    for(var i=0; i<stringTest.length; count+=+(letter==stringTest[i++]));
    return count;
}

console.log(countBs(stringTest));



