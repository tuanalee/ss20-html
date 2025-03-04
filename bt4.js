
function searchCharacter() {
    var str = prompt("Nhập vào một chuỗi: ");
    var charToFind = prompt("Nhập ký tự cần tìm kiếm: ");
    
    if (charToFind === '') {
        alert("Vui lòng nhập ký tự cần tìm.");
        return;
    }

    var found = false;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === charToFind) {
            found = true;
            break; 
        }
    }

    if (found) {
        alert("Ký tự '" + charToFind + "' có trong chuỗi.");
    } else {
        alert("Ký tự '" + charToFind + "' không có trong chuỗi.");
    }
}

searchCharacter();
