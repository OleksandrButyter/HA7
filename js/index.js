// JavaScript File
function getFibonacci() {
    var num = document.equation.a.value;
        a = 1,
        b = 1,
        c, i;
    if (num >= 3) {
        for (i = 3; i <= num; i++) {
            c = a + b;
            a = b;
            b = c;
        }
    }
    else {
        c = a;
    }
    res.innerHTML = c;
    return c;
}



btn.addEventListener('click', getFibonacci);



