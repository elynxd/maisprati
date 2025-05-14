let frase = "Ola mundo - ";
console.log(frase.trim());

console.log(Math.ceil(9,5))
console.log(Math.floor(9,5))
console.log(Math.round(9,5))
console.log(Math.random() * 100)
console.log(Math.pow(2,2))
console.log(Math.sqrt(9))
console.log(Math.abs(-9))
console.log(Math.max(1,2,3,4,5,6,7,8,9,10))
console.log(Math.min(1,2,3,4,5,6,7,8,9,10))

let date = new Date();

console.log(date.getFullYear())
console.log(date.getMonth() +1)
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

let date1 = new Date(2025, 7, 5)
let date2 = new Date(2007, 7, 5)

console.log(date1.toString())
console.log(date2.toString())

console.log(date1.getTime())
console.log(date2.getTime())

let milissegundosEntreDatas = Math.abs((date1.getTime()) - date2.getTime())

console.log(milissegundosEntreDatas)

let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000)

console.log(`A diferença entre as datas é de ${Math.ceil(milissegundosEntreDatas/milissegundosPorDia)} dias`)

function reverseStr(str) {
    return str.split("").reverse().join("");
}

console.log(reverseStr("Ola mundo"))


function dateToString(data) {
    let date = new Date()
    let formatter = Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    })
    return formatter.format(date)

}

console.log(dateToString(2025, 5, 8))

const promptSync = require(`prompt-sync`)()

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    console.log()
}

console.log(getRandomInt(1, 100))