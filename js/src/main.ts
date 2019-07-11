console.log("----------------------------------");

// tipagem
const string: string = "webinar";
const numero = 1;

// Funções
function converterParaString(numero: number): string {
  return numero.toString();
}
const type = converterParaString(3);
console.log("Função converter", type, typeof type);

// Objetos
const objeto: { atributo1: string; atributo2?: number } = {
  atributo1: "Meta",
  atributo2: 0
};

// Interfaces
interface UserInterface {
  name: string;
  idade: number;
  toString: () => String;
}

// Classes
class User {
  constructor(public name: string) {}
}

console.log("class", new User("Leonardo"));

class UserDois implements UserInterface {
  constructor(public name: string, public idade: number) {
    console.log("CL construtor", this.toString());
  }
  toString = () => this.name;
}

console.log("class", new UserDois("Leonardo", 20));

// Enuns
// Generics
let valor: Array<String>;
console.log("----------------------------------");
