/*
===========================================================
                CATÁLOGO DA FUTZONE
===========================================================

Todo o catálogo da loja fica dentro deste arquivo.

Como funciona?

1) Criamos um array chamado produtos.

2) Cada produto é um objeto.

3) O JavaScript cria automaticamente os cards.

Assim nunca precisamos escrever vários cards
no HTML.

===========================================================
*/



// comprar//

function comprar(nomeCamisa){

    const mensagem = `Olá! Vim pelo site da Futzone e tenho interesse na camisa ${nomeCamisa}.`;

    const url = `https://wa.me/557398625840?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

}

/* ===========================================
      PEGANDO ELEMENTOS DO HTML
=========================================== */

const catalogo = document.getElementById("catalogo");

const pesquisa = document.getElementById("pesquisa");

const preco = document.getElementById("preco");

const ordenar = document.getElementById("ordenar");

const filtros = document.querySelectorAll(".filtro-categoria");

const limpar = document.getElementById("limpar");

/* ===========================================
        MOSTRAR PRODUTOS
=========================================== */

function mostrarProdutos(lista){

    catalogo.innerHTML = "";

    lista.forEach(produto=>{

        catalogo.innerHTML += `

            <div class="produto">
            
                <div class="imagem">

                    ${
                        produto.estoque === false
                        ?
                        `<span class="selo-esgotado">
                            ESGOTADO
                        </span>`
                        :
                        ""
                    }

                    <img src="${produto.imagem}" alt="${produto.nome}">

                </div>

                <h4>${produto.nome}</h4>

                <p>
                    R$ ${produto.preco.toFixed(2).replace(".",",")}
                </p>

            ${
                produto.estoque !== false
                ?
                `<button onclick="comprar('${produto.nome}')">
                    Comprar
                </button>`
                :
                `<button class="esgotado" disabled>
                    Esgotado
                </button>`
            }

            </div>
        `;

    });

}

mostrarProdutos(produtos);
/*
====================================================
        EVENTOS DOS FILTROS
====================================================

Sempre que o usuário mudar alguma coisa,
vamos chamar a função filtrarProdutos().
*/

// Pesquisa
pesquisa.addEventListener("input", filtrarProdutos);

// Preço
preco.addEventListener("change", filtrarProdutos);

// Ordenação
ordenar.addEventListener("change", filtrarProdutos);

// Categorias
filtros.forEach(filtro=>{

    filtro.addEventListener("change", filtrarProdutos);

});

// Botão limpar

limpar.addEventListener("click", ()=>{

    // Limpa pesquisa

    pesquisa.value="";

    // Volta o preço para Todos

    preco.value="todos";

    // Volta ordenação

    ordenar.value="recente";

    // Desmarca todas categorias

    filtros.forEach(filtro=>{

        filtro.checked=false;

    });

    // Atualiza catálogo

    filtrarProdutos();

});


/*
====================================================
            FILTRAR PRODUTOS
====================================================

Essa função faz praticamente toda a lógica da loja.

Ela:

✔ pesquisa por nome

✔ filtra categoria

✔ filtra preço

✔ ordena

e depois mostra o resultado.
*/

function filtrarProdutos(){

    /*
    Começamos usando TODOS os produtos.
    */

    let resultado=[...produtos];


    /*
    ===================================
            PESQUISA
    ===================================
    */

    const texto=pesquisa.value.toLowerCase().trim();

    if(texto!=""){

        resultado=resultado.filter(produto=>{

            return produto.nome
            .toLowerCase()
            .includes(texto);

        });

    }


    /*
    ===================================
            CATEGORIAS
    ===================================
    */

    let categorias=[];

    filtros.forEach(filtro=>{

        if(filtro.checked){

            categorias.push(filtro.value);

        }

    });


    if(categorias.length>0){

        resultado=resultado.filter(produto=>{

            return categorias.includes(produto.categoria);

        });

    }



    /*
    ===================================
            PREÇO
    ===================================
    */

    if(preco.value!="todos"){

        resultado=resultado.filter(produto=>{

            return produto.preco<=Number(preco.value);

        });

    }



    /*
    ===================================
            ORDENAÇÃO
    ===================================
    */

    if(ordenar.value=="menor"){

        resultado.sort((a,b)=>a.preco-b.preco);

    }

    else if(ordenar.value=="maior"){

        resultado.sort((a,b)=>b.preco-a.preco);

    }

    else if(ordenar.value=="az"){

        resultado.sort((a,b)=>a.nome.localeCompare(b.nome));

    }

    else if(ordenar.value=="za"){

        resultado.sort((a,b)=>b.nome.localeCompare(a.nome));

    }



    /*
    ===================================
        MOSTRAR RESULTADO
    ===================================
    */

    mostrarProdutos(resultado);

}