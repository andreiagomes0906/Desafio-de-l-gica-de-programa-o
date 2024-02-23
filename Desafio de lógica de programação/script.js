// Mostre no console.log a mensagem "Ano novo está chegando!!"
console.log("Ano novo está chegando!!");

// Crie uma variável que receba o nome da cantora Mariah Carey
let nomeMariahCarey = "Mariah Carey";

// Crie uma variável que receba a idade dela
let idadeMariahCarey = 51;

// Crie uma variável com o ano atual e subtraia pelo o valor da idade da Mariah Carey
let anoAtual = new Date().getFullYear();
let anoNascimentoMariahCarey = anoAtual - idadeMariahCarey;
console.log("Ano de nascimento da Mariah Carey:", anoNascimentoMariahCarey);

// Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console.log;
let quartaFeira = false;
console.log("Valor da variável quartaFeira:", quartaFeira);

// Exiba no console o tipo de dado da variável quartaFeira;
console.log("Tipo de dado da variável quartaFeira:", typeof quartaFeira);

// Crie uma condição SE você for maior ou igual 18 retornará a mensagem...
if (idadeMariahCarey >= 18) {
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.");
} else {
    console.log("Sinto muito, mas assistirá da TV Globo.");
}

// Crie uma condição que exiba uma mensagem no console se você fizer aniversário em Agosto OU Dezembro OU JUNHO.
let mesAniversario = "Agosto";
if (mesAniversario === "Agosto" || mesAniversario === "Dezembro" || mesAniversario === "Junho") {
    console.log("Uma ou mais opções estão corretas. O mês escolhido foi o", mesAniversario + ".");
} else {
    console.log("Algo de errado não está certo. O mês digitado foi o", mesAniversario + ".");
}