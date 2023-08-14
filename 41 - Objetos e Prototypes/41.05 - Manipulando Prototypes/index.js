// Construindo objetos

// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

// Colocando o Objeto A dentro do protótipo do objeto B
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

// Usando função
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Criando função de desconto no protótipo da função
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

// Precisa pois o objeto literal não possui o protótipo do Produto 
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 79
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10
    }
});

p2.aumento(10);

console.log(p1);
console.log(p2);
console.log(p3);
