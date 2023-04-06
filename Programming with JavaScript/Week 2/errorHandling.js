//error is a faulty line of code that stop a program from execution


// throw new Error() //generate error
try {
    console.log(a + b); //  ReferenceError() example
}catch(err) {           //err is a named object that hold the error message 
    console.log("There was an error")
    console.log(err)             //only print out the error message
}
console.log("The program does not stop running")
