
function generateFibonacci() {
    
    var n = parseInt(prompt("Nhập số lượng số Fibonacci cần hiển thị:"));

   
    if (isNaN(n) || n <= 0) {
        console.log("Vui lòng nhập một số nguyên dương.");
        return;
    }

    
    var fib = [1, 1];

   
    if (n === 1) {
        console.log(fib[0]); 
        return;
    } else if (n === 2) {
        console.log(fib[0] + " " + fib[1]); 
        return;
    }

  
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }

   
    console.log(fib.join(" ")); 

generateFibonacci();
