// traffic lights
var light = "faulty";

if (light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("Drive");
        break; //exit the switch block if above statement is true
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }

 // Are you old enough
 var age = "10";

if (age >= 65 ) {
    console.log("You get your income from your pension")
}
else if (age < 65 && age >= 18 ){
    console.log("Each month you get a salary")
}
else if (age < 18){
    console.log("You get an allowance")
}
else{
    console.log("The value of the age variable is not numerical")
}

// more switch statements

var day = "Sunday";

switch(day) {
    case "Saturday":
        console.log("Rest and chill");
        break;
    case "Sunday":
        console.log("Do your assignment");
        break;
    default:
        console.log("It's a weekday boy, go to work");
        break;
}
