/**
 * Getter - Retorna o valor do atributo
 * Setter - Modifica o valor do atributo
 */
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // pode alterar as propriedades mais tarde no código
        get: function() { // para retornar o valor
            return estoquePrivador;
        },
        set: function(valor) { // Modifica o valor
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;
        }
    });

}

// EX. 2
function criarProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}

const p1 = new Produto('Cami', 20, 7);
p1.estoque = 30;
console.log(p1);

const p2 = new criarProduto('Refrigerante');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);
