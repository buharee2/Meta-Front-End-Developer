class WithDefaultParas {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
        } else {
            console.log("The value of bool1 is incorrect")
        }
        
        
            
    }
}

var better = new WithDefaultParas(); //uses the default paras
better.calculate();

let fail = new WithDefaultParas(1, 1, 1, 'Result:', false) //its custom paras
fail.calculate()