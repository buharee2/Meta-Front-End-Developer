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



