function fetchData() {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver("Dados recebidos");
        }, 2000);
    });
}

module.exports = fetchData;
