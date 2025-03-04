
function checkPrime() {
    
    var number = parseInt(prompt("Nhập một số nguyên:"));

    if (isNaN(number)) {
        console.log("Vui lòng nhập một số nguyên hợp lệ.");
        return;
    }

   
    if (number <= 1) {
        console.log("Số " + number + " không phải là số nguyên tố.");
        return;
    }


    var isPrime = true; 
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false; 
            break;
        }
    }
    if (isPrime) {
        console.log("Số " + number + " là số nguyên tố.");
    } else {
        console.log("Số " + number + " không phải là số nguyên tố.");
    }
}

checkPrime();
