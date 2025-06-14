function factorial(n) {
    let cal = 0;

    if (n === 0) return 1;
        cal = n * factorial(n - 1);
        return cal;
}
console.log(factorial(3));

function sum(n) {
    if (n === 1) return 1;
    return n + sum(--n);
}

console.log(sum(5));

function fiboRecursive(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fiboRecursive(n - 1) + fiboRecursive(n - 2);
    }
}
console.log(fiboRecursive(6));

const categories = [
    {
        id: 1,
        nome: "eletronicos",
        children: [
            { id: 1, nome: "cellphone", children: [] },
            {
                id: 2,
                nome: "computer",
                children: [
                    { id: 1, nome: "dell", children: [] },
                    { id: 2, nome: "asus", children: [] },
                    { id: 3, nome: "positivo", children: [] },
                ],
            },
            {
                id: 3,
                nome: "notebooks",
                children: [{ id: 1, nome: "apple", children: [] }],
            },
        ],
    },
    {
        id: 2,
        nome: "roupas",
        children: [
            { id: 1, nome: "camiseta", children: [] },
            { id: 2, nome: "calça", children: [] },
            { id: 3, nome: "blusa", children: [] },
            { id: 4, nome: "moleton", children: [] },
            { id: 5, nome: "calçado", children: [] },
        ],
    },
];

function printListCategories(list, lv = 0) {
    for (let category of list) {
        console.log("-".repeat(lv * 2) + category.nome);
        if (category.children.length > 0) {
            printListCategories(category.children, lv + 1);
        }
    }
}

console.log(printListCategories(categories));
