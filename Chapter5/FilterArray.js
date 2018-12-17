


var animals = [
    { name: "Pippy", type: "dog", age: 12 },
    { name: "Meowmers", type: "cat", age: 4 },
    { name: "Nigel", type: "dog", age: 10 },
    { name: "Winston", type: "dog", age: 1 },
  ];
  var oldDogs = animals.filter(function(animal) {
    return console.log(animal.age > 10 && animal.type === "dog");
  });
  // oldDogs will now be an array that contain 
  // only Waffles and Hank objects.