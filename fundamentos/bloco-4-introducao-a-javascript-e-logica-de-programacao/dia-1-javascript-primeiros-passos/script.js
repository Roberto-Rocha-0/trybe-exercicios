const a2 = 5;
const b2 = 36;
// Ex:1
console.log(a2+b2);
console.log(a2-b2);
console.log(a2*b2);
console.log(a2/b2);
console.log(a2%b2);

// Ex:2
const aa = 700;
const bb = 98;

if (aa > bb){
	console.log(aa);
}
	else {
	console.log(bb);
	};

	// Ex:3
const a1 = 15;
const b1 = 25;
const c1 = 30;

if (a1 > b1 && a1 > c1) {
	console.log(a1);
}
else if (b1 > a1 && b1 > c1) {
	console.log(b1);
}
else {
	console.log(c1);
};

 // Ex:4
const number = 0;


if (number > 0) {
	console.log("positive");
}
else if (number < 0) {
	console.log("negative");
}
else {
	console.log("zero");
};

// Ex:5
let angulo1 = 10;
let angulo2 = 100;
let angulo3 = 70;

if (angulo1 < 0 && angulo2 < 0 && angulo3 < 0){
	console.log("Erro");
}
else if (angulo1 + angulo2 + angulo3 === 180) {
	console.log("true");
}
else {
	console.log("false");
};

// Ex:6
let pawn = "FRENTELADOS";
pawn = 'FRENTELADOS'.toLocaleLowerCase();
console.log(pawn);

if (pawn) {
	console.log(pawn);
	}
	else if (tower) {
		console.log(frontSide);
	}
	else if (horse) {
		console.log(sides);
	}
	else if (bishop) {
		console.log(diagonals);
	}
	else {
		console.log('mensagem de erro');
	}

	// Ex:7
	let nota = 100;
  
	if(nota / 100 >= 0.9) {
		console.log('A');
	}
	else if (nota / 100 >= 0.8) {
		console.log('B');
	}
	else if (nota / 100 >= 0.7) {
		console.log('C');
	}
	else if (nota / 100 >= 0.6) {
		console.log('D');
	}
	else if (nota / 100 >= 0.5) {
		console.log('E');
	}
	else if (nota / 100 < 0.5) {
		console.log('F');
	}
	else {
		console.log(Erro);
	};
	
	//Ex:8
	let number1 = 2;
	let number2 = 12;
	let number3 = 6;

	let total1 = number1 % 2;
	let total2 = number2 % 2;
	let total3 = number3 % 2;
	

if (total1 == 0 || total2 == 0 || total3 == 0) {
	console.log('Par');
}
else {
	console.log('Impar');
};

//Ex:9
let number4 = 13;
let number5 = 112;
let number6 = 99;

let total4 = number4 % 2;
let total5 = number5 % 2;
let total6 = number6 % 2;

if (total4 != 0 || total5 != 0 || total6 != 0) {
	console.log('Impar');
}
else {
	console.log('Par');
}

//Ex:10
let custoDoProduto = 100;
let valorDeVenda = 250;

let impostoSobreCusto = custoDoProduto * 0.2;
let valorCustoTotal = custoDoProduto + impostoSobreCusto;

let lucro = valorDeVenda - valorCustoTotal;

let numeroDeVendas = 1000;

if (numeroDeVendas >= 1000) {
	let lucroTotal = numeroDeVendas * lucro;
	console.log(lucroTotal);
}
else if (numeroDeVendas < 0 && impostoSobreCusto < 0 && valorCustoTotal < 0) {
	console.log(Erro);
}

//Ex:11










//Exercicios de pratica:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 01

for (let index = 0; index < numbers.length; index += 1){
	console.log(numbers[index]);
}

//2
let soma = 0;

for (let i = 0; i < numbers.length; i += 1){
	soma += numbers[i];
}
console.log('A soma de todos os numeros é:' + soma);

//3
let totalDeNumbers = numbers.length;
let mediaDeNumbers = soma / totalDeNumbers;
console.log('A Média Aritimética de numbers é:', soma / totalDeNumbers);

//4
if (mediaDeNumbers > 20){
	console.log('valor maior que 20');
}
else {
	console.log('valor menor ou igual a 20');
}

// 5
