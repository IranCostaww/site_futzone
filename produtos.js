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

const produtos = [

    // ===============================
    // NACIONAIS
    // ===============================

    {
        nome: "Flamengo Home 25/26",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/flamengo.webp"
    },

    {
        nome: "Flamengo Away 25/26",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/flamengoaway.webp"
    },

    {
        nome: "Corinthians Home 25/26",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/corinthias.jpg"
    },

    {
        nome: "Palmeiras 26/27",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/palmeiras26.jpg"
    },

    {
        nome: "São Paulo Home 25/26",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/sp25.webp"
    },

    {
        nome: "Vasco 26",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/vasco26.jpg"
    },

    {
        nome: "Cruzeiro Home 25/26",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/cruzeiro25.webp"
    },

    {
        nome: "Atlético Mineiro Home",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/atleticominerio25.webp"
    },

    {
        nome: "Grêmio Home",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/gremio25.webp"
    },

    {
        nome: "Internacional Home",
        preco: 269.90,
        categoria: "Nacional",
        imagem: "imagens/internacional25.webp"
    },

    // ===============================
    // INTERNACIONAIS
    // ===============================

    {
        nome: "Real Madrid Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/real.jpg"
    },

    {
        nome: "Barcelona Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/barcelona.jpg"
    },

    {
        nome: "Manchester City Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/mancity25.webp"
    },

    {
        nome: "Manchester United Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/manunited25.webp"
    },

    {
        nome: "Liverpool Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/liverpool25.webp"
    },

    {
        nome: "Ajax Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/ajax.jpg"
    },

    {
        nome: "Arsenal Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/arsenal26.webp"
    },

    {
        nome: "Bayern Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/bayern26.webp"
    },

    {
        nome: "Borussia Dortmund Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/bvb26.webp"
    },

    {
        nome: "PSG 18 Neymar",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/psg18.webp"
    },

    {
        nome: "Juventus Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/jv26.webp"
    },

    {
        nome: "Milan Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/milan26.webp"
    },

    {
        nome: "Inter de Milão Home",
        preco: 289.90,
        categoria: "Internacional",
        imagem: "imagens/milao26.webp"
    },

    // ===============================
    // SELEÇÕES
    // ===============================

    {
        nome: "Brasil 2026",
        preco: 249.90,
        categoria: "Seleção",
        imagem: "imagens/brasil.jpg"
    },

    {
        nome: "Argentina 2026",
        preco: 249.90,
        categoria: "Seleção",
        imagem: "imagens/argentina26.webp"
    },

    {
        nome: "Portugal 2026",
        preco: 249.90,
        categoria: "Seleção",
        imagem: "imagens/portugal26.webp"
    },

    {
        nome: "Alemanha 2026",
        preco: 249.90,
        categoria: "Seleção",
        imagem: "imagens/alemanha26.webp"
    },

    {
        nome: "Espanha 2026",
        preco: 249.90,
        categoria: "Seleção",
        imagem: "imagens/espanha26.webp"
    },

    {
        nome: "França 2 2026",
        preco: 249.90,
        categoria: "Seleção",
        imagem: "imagens/frança2.jpg"
    }

];

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

        <div class="camisa">

            <div class="imagem">

                <img src="${produto.imagem}" alt="${produto.nome}">

            </div>

            <h4>${produto.nome}</h4>

            <span>

                R$ ${produto.preco.toFixed(2).replace(".",",")}

            </span>

            <button>

                Comprar

            </button>

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