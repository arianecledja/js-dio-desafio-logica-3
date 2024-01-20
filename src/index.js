class Pessoa {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque = ''
        switch(this.tipo) {
            case 'mago':
                ataque = 'magia'
                break
            case 'guerreiro':
                ataque = 'espada'
                break
            case 'monge':
                ataque = 'artes marciais'
                break
            case 'ninja':
                ataque = 'shuriken'
                break
            default:
                ataque = 'tipo não identificado'
        }
        return `O ${this.tipo} atacou usando ${ataque}`
    }
}

const bloom = new Pessoa('Bloom', 23, 'mago')
const ben10 = new Pessoa('Ben 10', 10, 'guerreiro')

console.log(ben10.atacar())