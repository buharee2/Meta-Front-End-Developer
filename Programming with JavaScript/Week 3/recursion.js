// factorial calculator

function factoial(n){
    if (n == 1 || n == 0){
        return 1;
    }else {
        return n * factoial(n-1);
    }
}

console.log(factoial(4))

//4 * factorial(3)
///3 * factoral(2)
////2 * factorial(1)
/////1                //the result of factorial(1)
