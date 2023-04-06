var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmart: 30,
    health: 40,
    specialAbilitity: "young and ambitious",
    greeting: "Let's make some money"
}


assistantManager.health = 50             //update
assistantManager.status = "single"       //add another key value pair
assistantManager["Mobile Device"] = "Galaxy" //bracket notation which make posssible use of space or number in key name
console.log(assistantManager)

// list and object

var arrOfKeys = ["speed", "altitude", "color"]
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++){
    console.log(drone[arrOfKeys[i]])
}

//array and object methods

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);     //add an item
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); 
simpleArr.pop()         // remove the last item
console.log(simpleArr);

// how a function can be a method of an object

var car = {};
car.color = "red";
car.mileage = 98325
car.turnTheKey = function(){
    console.log("The engine is running")
}
car.lightsOn = function (){
    console.log("The lights are on")
}

console.log(car)
car.turnTheKey()
car.lightsOn()