function sortNameByPrice(products) {
    const productsSorted = [...products].sort((a, b) => a.price - b.price);

    const nameSorted = productsSorted.map((item) => item.itemName);

    return nameSorted;
}

const products = [
    { itemName: "Geladeira", price: 8000 },
    { itemName: "Fogao", price: 2500 },
    { itemName: "Mesa", price: 2000 },
    { itemName: "Sofa", price: 4000 },
];

console.log(sortNameByPrice(products));
