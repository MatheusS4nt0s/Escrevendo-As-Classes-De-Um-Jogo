class Heroi {
    constructor(nomeHeroi, idade, tipo) {
        this.nomeHeroi = nomeHeroi;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "usando magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usando espada";
        } else if (this.tipo === "monge") {
            ataque = "usando artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usando shuriken";
        }

        console.log(`O ${this.tipo} atacou ${ataque}`);
    }
}

// Criar instâncias da classe Heroi
let heroi1 = new Heroi("Mestre dos magos", 26, "mago");
let heroi2 = new Heroi("Kratos", 45, "guerreiro");
let heroi3 = new Heroi("Dr. Estranho", 37, "monge");
let heroi4 = new Heroi("Naruto", 17, "ninja");

// Chamar o método atacar para cada instância
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
