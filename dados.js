const produtos = [

    // ===============================
    // NACIONAIS
    // ===============================

    {
        nome: "Flamengo 25/26  | Versão Jogador",
        preco: 180.00,
        categoria: "Nacional",
        imagem: "imagens/flamengo26_jogador.jpg"
    },

    {
        nome: "Flamengo 25/26  | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/flamengo26_torcedor.webp"
    },

    {
        nome: "Corinthians 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/corinthias.jpg",
        estoque:false
    },

    {
        nome: "Palmeiras 26/27 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/palmeiras26.jpg"
    },

    {
        nome: "São Paulo 25/26 | Versão Jogador",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/sp25.webp",
        estoque:false
    },

    {
        nome: "Vasco 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/vasco26.jpg"
    },

    {
        nome: "Bahia 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/bahia.jpg"
    },

    {
        nome: "Atlético Mineiro | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/atleticominerio25.webp",
        estoque:false
    },

    {
        nome: "Grêmio 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/gremio25.webp",
        estoque:false
    },

    {
        nome: "Internacional 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/internacional25.webp",
        estoque:false
    },

    // ===============================
    // INTERNACIONAIS
    // ===============================

    {
        nome: "Real Madrid 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/real.jpg"
    },

    {
        nome: "Barcelona 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/barcelona.jpg"
    },

    {
        nome: "Manchester City 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/mancity25.webp",
        estoque:false
    },

    {
        nome: "Manchester United 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/manunited25.webp",
        estoque:false
    },

    {
        nome: "Liverpool 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/liverpool25.webp",
        estoque:false
    },

    {
        nome: "Ajax 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/ajax.jpg"
    },

    {
        nome: "Arsenal 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/arsenal26.webp",
        estoque: false
    },

    {
        nome: "Bayern 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/bayern26.webp",
        estoque:false
    },

    {
        nome: "Borussia Dortmund 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/bvb26.webp",
        estoque:false
    },

    {
        nome: "PSG 18 Neymar",
        preco: 180.00,
        categoria: "Internacional",
        imagem: "imagens/psg18.webp",
        estoque:false
    },

    {
        nome: "Juventus 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/jv26.webp",
        estoque:false
    },

    {
        nome: "Milan 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/milan26.webp",
        estoque:false
    },

    {
        nome: "Inter de Milão 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/milao26.webp",
        estoque:false
    },

    // ===============================
    // SELEÇÕES
    // ===============================


    {
        nome:"Brasil 1998 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/Brasil98.jpg"
    },

    {
        nome: "Brasil 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/brasil.jpg"
    },

    {
        nome: "Argentina 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/argentina26.webp",
        estoque:false
    },

    {
        nome: "Portugal 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/portugal26.webp",
        estoque: false
    },

    {
        nome: "Alemanha 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/alemanha26.webp",
        estoque:false
    },

    {
        nome: "Espanha 25/26 | Versão Jogador",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/espanha26.webp",
        estoque:false
    },

    {
        nome: "França 2 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/frança2.jpg",
        estoque:false
    }

];

function comprar(nomeCamisa){

    const mensagem =
    `Olá! Vim pelo site da Futzone e tenho interesse na camisa ${nomeCamisa}.`;

    const url =
    `https://wa.me/5573988625840?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

}