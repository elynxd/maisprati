function pairsToObject(pairs) {
    const obj = {};

    for (const [key, value] of pairs) {
        obj[key] = value;
    }

    return obj;
}

function objectToPairs(obj) {
    return Object.entries(obj)
}

const pairsArray = [
    ["name", "John"],
    ["age", 33],
    ["city", "San Francisco"],
];
const obj = pairsToObject(pairsArray);
console.log(obj);

const objExample = {
    nome: "Foo Bar",
    age: 32,
    profession: "Software Engineer",
};
const pairs = objectToPairs(objExample);
console.log(pairs);
