// Setas dos carrosséis da home

const vitrines = document.querySelectorAll(".vitrine");

vitrines.forEach(vitrine => {
    const lista = vitrine.querySelector(".lista-produtos");
    const botaoDireita = vitrine.querySelector(".proximo");
    const botaoEsquerda = vitrine.querySelector(".anterior");

    botaoDireita.addEventListener("click", () => {
        lista.scrollBy({ left: 320, behavior: "smooth" });
    });

    botaoEsquerda.addEventListener("click", () => {
        lista.scrollBy({ left: -320, behavior: "smooth" });
    });
});

function criarCard(produto){
    return `
    <div class="produto">
        <div class="imagem">
            ${produto.estoque === false ? `<span class="selo-esgotado">ESGOTADO</span>` : ""}
            <span class="selo-bf">Black Friday</span>
            <img src="${produto.imagem}" alt="${produto.nome}">
        </div>
        <h4>${produto.nome}</h4>
        ${produto.tamanho ? `<span class="tamanho-unico">Tamanho único: ${produto.tamanho}</span>` : ""}
        ${
            produto.precoOriginal
            ? `<div class="preco-wrapper">
                <span class="preco-original">R$ ${produto.precoOriginal.toFixed(2).replace(".",",")}</span>
                <span class="preco-desconto">R$ ${produto.preco.toFixed(2).replace(".",",")}</span>
               </div>`
            : `<p class="preco-normal">R$ ${produto.preco.toFixed(2).replace(".",",")}</p>`
        }
        ${
            produto.estoque !== false
            ? `<button onclick="comprar('${produto.tamanho ? `${produto.nome} (Tamanho único: ${produto.tamanho})` : produto.nome}', ${produto.preco})">Comprar</button>`
            : `<button class="esgotado" disabled>Esgotado</button>`
        }
    </div>
    `;
}

// comprar() vem de dados.js, carregado antes deste arquivo

const listaLancamentos = document.getElementById("lancamentos");
const listaMaisVendidos = document.getElementById("maisVendidos");

if(listaLancamentos && listaMaisVendidos){
    fetch(PRODUTOS_URL, { cache: "no-cache" })
        .then(res => res.json())
        .then(produtos => {
            produtos.slice(0,6).forEach(produto => {
                listaLancamentos.innerHTML += criarCard(produto);
            });
            produtos.slice(6,12).forEach(produto => {
                listaMaisVendidos.innerHTML += criarCard(produto);
            });
        });
}
