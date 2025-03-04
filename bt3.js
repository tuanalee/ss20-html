
function isPalindrome() {

    var number = document.getElementById("number").value;

    var cleanedNumber = number.replace(/\s+/g, ''); 

    // Đảo ngược chuỗi số
    var reversedNumber = cleanedNumber.split('').reverse().join('');

    if (cleanedNumber === reversedNumber) {
        document.getElementById("result").innerHTML = "Số " + cleanedNumber + " là số đối xứng.";
    } else {
        document.getElementById("result").innerHTML = "Số " + cleanedNumber + " không phải là số đối xứng.";
    }
}
