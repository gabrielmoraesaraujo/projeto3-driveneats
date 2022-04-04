let precoPrato;
let precoBebida;
let precoSobremesa;

function clicarPrato(prato) {
  pratoSelecionado = document.querySelector(".pratoSelecionado");

  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("pratoSelecionado");
    prato.classList.add("pratoSelecionado");
  } else {
    prato.classList.add("pratoSelecionado");
  }

  itensSelecionados();
}

function clicarBebida(bebida) {
  bebidaSelecionada = document.querySelector(".bebidaSelecionada");

  if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove("bebidaSelecionada");
    bebida.classList.add("bebidaSelecionada");
  } else {
    bebida.classList.add("bebidaSelecionada");
  }
  itensSelecionados();
}

function clicarSobremesa(sobremesa) {
  sobremesaSelecionada = document.querySelector(".sobremesaSelecionada");

  if (sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove("sobremesaSelecionada");
    sobremesa.classList.add("sobremesaSelecionada");
  } else {
    sobremesa.classList.add("sobremesaSelecionada");
  }
  itensSelecionados();
}

function itensSelecionados() {
  prato = document.querySelector(".pratoSelecionado");
  bebida = document.querySelector(".bebidaSelecionada");
  sobremesa = document.querySelector(".sobremesaSelecionada");

  botaoItens = document.querySelector(".botao-itens");
  botaoFechar = document.querySelector(".botao-fechar");

  if (prato !== null && sobremesa !== null && bebida !== null) {
    botaoItens.classList.add("esconder-botao");
    botaoFechar.classList.remove("esconder-botao");

    precoPrato = prato.querySelector(".preco-item").querySelector(".preco")
      .innerHTML;
    precoBebida = bebida.querySelector(".preco-item").querySelector(".preco")
      .innerHTML;
    precoSobremesa = sobremesa
      .querySelector(".preco-item")
      .querySelector(".preco").innerHTML;
  }
}