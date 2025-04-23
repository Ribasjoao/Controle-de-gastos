//Modularização (ES Modules)
import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utils.js";
//POO
const gastosPorCategoria = new ListaGastosPorCategoria(
    new Categoria("Alimentacao"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros"),
)

//Manipulação do DOM
const formulario = document.querySelector("form")

formulario.addEventListener("submit", (evento) => {
    //Prevenção do formato padrão
    evento.preventDefault();

    const ValorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;

    if (valorNegativo(ValorInformado)) {
        alert("Valor inválido. O valor não pode ser negativo");
        return;
    }
    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada)
    categoria.adicionarValor(ValorInformado);


    atualizarInterface(gastosPorCategoria);
    formulario.reset();

})
