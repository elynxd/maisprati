const obj = {
    titulo: "Padroões de projeto",
    preco: 98.00,
    numPaginas: 413,

    mostraOjb: function() {
        console.log(`Lendo o livro ${obj.titulo}`)
    }
}

obj.mostraOjb()

function jogos(title, gen, year) {
    return {
    title,
    gen,
    year
    }
}

let jogo = jogos(" God of War", "Acao", 2018)
console.log(jogo)

let personagens = [["Jogador1", "Jogador2", "Jogador3"], "Jogador4", "Jogador5", "Jogador6"]

// Com for in são iteraveis e.g cada chave 
for (let key in personagens) {
    console.log(personagens[key])
}

let palavra = 'teste'

// Com for of são iteraveis e.g cada caractere
for (let char of palavra) {
    console.log(char)
}

// Com for of itera cada elemento
for(let person of personagens) {
    console.log(person)
}

const prof = {
    nome: "Luis",
    notas: {
        aluno1: 8,
        aluno2: 7
    },
}

let sumNotas = 0;
let numEstudantes = 0;

for (let estudante in prof.notas) {
    sumNotas += prof.notas[estudante] 
    ? prof.notas[estudante].reduce((acc, nota) => acc + nota, 0)/ prof.notas[estudante].length 
    : prof.notas[estudante]
        numEstudantes++
}

let media = sumNotas/numEstudantes

console.log(`A nota média turma é ${media}`)

if(media) {
    console.log(`${prof.nome} está aco,a da média`)
} else {
    console.log(`${prof.nome} está abaixo da média`)
}

const livraria = [
    { titulo: "Código Limpo", autor: "Martin", ano: 2019 },
    { titulo: "The Gunslinger", autor: "Stephen King", ano: 1991 },
    { titulo: "Laranja Mecânica", autor: "Nicole", ano: 1810 },
    { titulo: "Pequeno Príncipe", autor: "Fabiana", ano: 1903 },
    { titulo: "As Crônicas Marciana", autor: "Bradbury", ano: 2010 },
]

for (let livro in livraria) {
    console.log('Livro: ', livraria[livro])
}

const filmes = [
    {titulo: "Star Wars", gen: "Acao", ano: 1977},
    {titulo: "Matrix", gen: "Acao", ano: 1999},
    {titulo: "O Senhor dos Aneis", gen: "Fantasia", ano: 2001},
    {titulo: "A Origem", gen: "Acao", ano: 2010},
    {titulo: "A Guerra dos Tronos", gen: "Fantasia", ano: 2011},
    {titulo: "Os Vingadores", gen: "Acao", ano: 2012},
    {titulo: "Batman", gen: "Acao", ano: 2005},
    {titulo: "Superman", gen: "Acao", ano: 2013},
    {titulo: "Mulher Maravilha", gen: "Acao", ano: 2013},
]

let count = 0;

for(let film of filmes) {
    if(film.gen == "Acao") {
        count++;
        console.log(count,") Filmes de ação: ", film)
    }
}

let contagemGenero = {};

filmes.forEach(item => {
    if(contagemGenero[item.gen]) {
        contagemGenero[item.gen]++
    } else {
        contagemGenero[item.gen] = 1
    }
})

console.table(contagemGenero)

function calcFatorial(num) {
    let fatorial = 1;
    
    for(let i = 1; i <= num; i++) {
        fatorial *= i;
    }

    console.log(fatorial)
}

calcFatorial(5)

function fibonacci() {

    let a = 0, b = 1, temp
    console.log(a)
    console.log(b)
    
    for(let i = 3; i <= 10; i++) {

        temp = a + b
        console.log(temp)
        a = b
        b = temp
    }
}

fibonacci()

function fibonacci() {
    let sequencial = [1, 1]

    for (let i = 0; i <= 10; i++) {
        sequencial.push(sequencial[i] + sequencial[i + 1]);
        console.table(sequencial[i])
    }
}

fibonacci()