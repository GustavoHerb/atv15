function filtrarNumerosPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

document.getElementById("btn-filtrar").addEventListener("click", function() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Exemplo de array de números
    const numerosPares = filtrarNumerosPares(numeros);

    const resultadoElement = document.getElementById("resultado");
    if (numerosPares.length > 0) {
        resultadoElement.textContent = "Números pares: " + numerosPares.join(", ");
    } else {
        resultadoElement.textContent = "Não há números pares para exibir.";
    }
});