"use strict"

class Person{

	constructor(nome){
		console.log(`Criando ${this.getTipo()} ${this.log_cria(nome)}`);
		this.nome_completo = nome
	}
	getTipo(){
		return "pessoa";
	}
	imprime() {
		console.log(this.nome_completo)
	}
	log_cria(nome){
		return `Nome: ${nome}`;
	}
}

class Ninja extends Person {
	constructor(nome) {
		super(nome)
	}
	getTipo(){
		return "Ninja"
	}
}

module.exports = {
	Person: Person,
	Ninja: Ninja
};
