function somatorio(array) {
    return array.reduce((acc, num) => acc + num, 0);
}

module.exports = { somatorio };

// Para testar diretamente no terminal:
// console.log(somatorio([1, 2, 3, 4, 5])); // Deve imprimir 15
