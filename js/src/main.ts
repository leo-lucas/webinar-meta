console.log("----------------------------------");

// Funções
function converterParaString(numero: number): string {
// tipagem
  const string: string = "webinar";
  const numeros = [1];
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

class UserComplete extends User implements UserInterface {
  constructor(name: string, public idade: number) {
    super(name);
    console.log("CL construtor", this.toString());
  }
  toString = () => this.name;
}

console.log("class", new UserComplete("Leonardo", 20));

// Enuns
enum Tipo {
  Administrador,
  Clinte = "cliente"
}

class UsuarioTipado extends UserComplete {
  tipo: Tipo | undefined;
}

const usuario = new UsuarioTipado("usuario 1", 30);

usuario.tipo = Tipo.Administrador;
console.log("Usuario sem tipo", usuario);

usuario.tipo = Tipo.Clinte;
console.log("Usuario tipado", usuario);

// Generics
let array: Array<String> | undefined;
console.log(array);

array = ["01"];
console.log(array);

console.log("----------------------------------");
