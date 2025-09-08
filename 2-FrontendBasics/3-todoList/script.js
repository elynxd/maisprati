const nome = document.getElementById("nome");
const form = document.getElementById("todo-form");
const inputItem = document.getElementById("input-item");
const listItems = document.getElementById("item-list");
const btnClear = document.getElementById("btn-clear");
const statusFilter = document.getElementById("status-filter");
const sortedFilter = document.getElementById("sorted-filter");
const countTotal = document.getElementById("total");
const countPending = document.getElementById("pending");
const countPurchased = document.getElementById("purchased");

let items = [];

window.addEventListener("DOMContentLoaded", () => {
    function showInitialAlert() {
        alert("Bem-vindo a lista de compras!");
        const yourName = prompt("Qual o seu nome?") || "Guess";
        if (confirm(`${yourName}, confirme seu nome!`)) {
            nome.textContent = `${yourName}!`;
        } else {
            nome.textContent = "Guess!";
        }
    }
    showInitialAlert();

    const data = localStorage.getItem("buyList");
    if (data) {
        items = JSON.parse(data);
        renderList();
    }

    statusFilter.addEventListener("change", renderList);
    sortedFilter.addEventListener("change", renderList);
});

function saveData() {
    localStorage.setItem("buyList", JSON.stringify(items));
}

function renderList() {
    let displayItems = [...items];
    const status = statusFilter.value;

    if (status === "pending")
        displayItems = displayItems.filter((item) => !item.purchased);
    if (status === "purchased")
        displayItems = displayItems.filter((item) => item.purchased);

    countTotal.textContent = items.length;
    countTotal.style.color = items.length === 0 ? "#ff5a5a" : "#131313";
    countTotal.textContent =
        items.length === 0 ? "Total: 0" : `Total: ${items.length}`;

    countPending.textContent = `Pendentes: ${
        items.filter((item) => !item.purchased).length
    }`;
    countPurchased.textContent = `Comprados: ${
        items.filter((item) => item.purchased).length
    }`;

    if (sortedFilter.value === "alphabetical") {
        displayItems.sort((a, b) => a.text.localeCompare(b.text));
    } else if (statusFilter.value === status) {
        displayItems.sort((a, b) => a.purchased - b.purchased);
    }

    listItems.innerHTML = "";

    displayItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        const itemText = item.itemName || item.text || item;
        li.textContent = itemText;

        if (index % 2 === 0) {
            li.style.backgroundColor = "#f0f0f0";
        }

        const div = document.createElement("div");
        div.className = "item-controls";
        div.style = "display: inline-flex; align-items: center; gap: 1rem;";
        li.appendChild(div);

        const p = document.createElement("p");
        div.appendChild(p);
        p.textContent = "comprou?";

        const btnToggleItem = document.createElement("input");
        btnToggleItem.type = "checkbox";
        btnToggleItem.className = "btn-check";
        btnToggleItem.addEventListener("click", () => {
            item.purchased = !item.purchased;
            saveData();
            renderList();
        });
        div.appendChild(btnToggleItem);

        const btnRemoveItem = document.createElement("button");
        btnRemoveItem.className = "btn-del";
        btnRemoveItem.innerHTML =
            '<i class="ph-bold ph-trash" style="font-size: 17px;"></i>';
        btnRemoveItem.addEventListener("click", () => removeItem(index));
        div.appendChild(btnRemoveItem);

        if (item.purchased === true) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.6";
            p.textContent = "comprado!";
            btnToggleItem.checked = true;
        }

        listItems.appendChild(li);
    });
}

function removeItem(index) {
    items.splice(index, 1);
    saveData();
    renderList();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = inputItem.value.trim();
    if (newItem === "") return;

    items.push({ text: newItem, purchased: false });

    saveData();
    renderList();

    inputItem.value = "";
});

btnClear.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Deseja mesmo limpar a lista?")) {
        items = [];
        localStorage.removeItem("buyList");
        renderList();
    }
});
