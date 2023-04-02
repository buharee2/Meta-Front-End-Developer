//  10 days of work in two weeks

for (var i = 1; i < 3; i++) {

    for ( var j = 1; j < 6; j++) {
        console.log("week", i, "day", j )
    }
}

//multiplication table

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 10; j++){
        console.log(i, "times", j, "equals to", i*j) // chnange the operator for other operations
    }
}

//Letter cubes for toddlers

var cubes = 'ABCDEFG';

//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles) //the styles effect can be seen using the browser console
}