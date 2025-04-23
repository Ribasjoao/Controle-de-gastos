export class Categoria {
    //Encapsulamento com campos privados
    #nome;
    #valor;
    constructor(nome) {
        this.#nome = nome;
        this.#valor = 0;
    }
    //Uso de Getters
    get valor() {
        return this.#valor;
    }

    get nome() {
        return this.#nome;
    }
    //Manipulação do estado
    adicionarValor(valor){
        this.#valor += parseFloat(valor);
    }
}

export class ListaGastosPorCategoria {
    #categorias;
    //Rest Operator
    constructor(...categorias){
        this.#categorias = categorias;
    }
    get categorias(){
        return this.#categorias;
    }

    obterCategoriaPorNome(nome){
        return this.#categorias.find((categoria) => categoria.nome == nome);
    }

    obterTotal () {
        //Redução de dados com reduce
        return this.#categorias.reduce((total, categoria) => total + categoria.valor, 0)
    }
}