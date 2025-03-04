
function isPrime(number) {
    if (number <= 1) return false; 
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 


function generatePrimes() {
    var n = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị:"));

   
    if (isNaN(n) || n <= 0) {
        console.log("Vui lòng nhập một số nguyên dương.");
        return;
    }

    var primes = []; 
    var number = 2;  

    
    while (primes.length < n) {
        if (isPrime(number)) {
            primes.push(number); 
        }
        number++; 
    }


    console.log("Các số nguyên tố đầu tiên là: " + primes.join(" "));
}


generatePrimes();
