
function calculatePower(a, b) {
    let result = 1;
    

    for (let i = 1; i <= b; i++) {
        result *= a;
    }
    
    return result;
}

let a = 2; 
let b = 3; 

let result = calculatePower(a, b);
console.log(a + " ^ " + b + " = " + result); 
