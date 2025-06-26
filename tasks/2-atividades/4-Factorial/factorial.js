function factorial(n) {
    if (n < 0)
        throw new Error("Não é possível calcular fatorial de número negativo");
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

try {
    console.log(factorial(5)); // 120
    console.log(factorial(-1)); // error message
} catch (e) {
    console.error(e.message);
}
