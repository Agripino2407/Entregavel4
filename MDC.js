function mdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

module.exports = { mdc };

// Opcional:
// console.log(mdc(48, 18));
