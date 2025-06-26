const sells = [
    { client: "John", total: 100 },
    { client: "Mary", total: 150 },
    { client: "John", total: 200 },
    { client: "David", total: 300 },
    { client: "Caroline", total: 50 },
    { client: "David", total: 86 },
];

const totalByClient = sells.reduce((sum, sell) => {
    sum[sell.client] = (sum[sell.client] || 0) + sell.total;

    return sum;
}, {});

console.log(totalByClient);
