/**
 * É usado para definir uma propriedade em um objeto
 */

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // pode alterar as propriedades mais tarde no código
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        },
        
        preco: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true 
        }
    });
}

const p1 = new Produto('Cami', 20, 7);
console.log(p1);
