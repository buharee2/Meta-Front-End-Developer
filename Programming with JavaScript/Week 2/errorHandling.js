//error is a faulty line of code that stop a program from execution


// throw new Error() //generate error
try {
    console.log(a + b); //  ReferenceError() example
}catch(err) {           //err is a named object that hold the error message 
    console.log("There was an error")
    console.log(err)             //only print out the error message
}
console.log("The program does not stop running")

//adder with error handling

function addTwoNums(a, b){
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError("the first argument is not a number")
        } else if (typeof(b) != 'number'){
            throw new ReferenceError("the second argument is not a number")
        } else {
            console.log(a + b);
        }       
    }catch(err) {
        console.log("Error!", err)
    }    
}
addTwoNums(5, "5")
console.log("It still works")

// word finder with depensive programming/error handling

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    
    } else{
         console.log("Please pass correct arguments to the function.")
    }
}
letterFinder("cat", "c")