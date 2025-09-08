const fetchData = require("./fetchData");

test("return data from API after 2 secs", async () => {
    const data = await fetchData();
    expect(data).toBe("Dados recebidos");
});
