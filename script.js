async function carregarImagens(urls, id) {

    let token  ='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';

    for (let url of urls) {
        let resposta = await fetch(url, {
            headers: {
                Authorization: `token ${token}`
            }
        });

        if (resposta.ok) {
            let dados = await resposta.json();
            let imagemURL = dados.download_url;

            let imagemElemento = document.createElement('img');
            imagemElemento.src = imagemURL;

            document.getElementById(id).appendChild(imagemElemento);
        } else {
            console.error(`Erro ao carregar a imagem de ${url}: ${resposta.statusText}`);
        }
    }
}


let repo = 'desweb24/desweb24.github.io';


//Imagens Página Index
let img1 =[
    `https://api.github.com/repos/${repo}/contents/folder/homepage.jpeg`
];

let imgRS = [
    `https://api.github.com/repos/${repo}/contents/folder/rockstar1.png`
];
let imgPIT = [
    `https://api.github.com/repos/${repo}/contents/folder/picit1.png`
];

carregarImagens(img1,'img1');
carregarImagens(imgRS,'imgRS');
carregarImagens(imgPIT,'imgPIT');

//Imagens Página Sobre
let imgSobre = [
    `https://api.github.com/repos/${repo}/contents/img/sobre.JPG`
];

carregarImagens(imgSobre,'imgSobre');

//imagem fotografia
let ft = [
    `https://api.github.com/repos/${repo}/contents/img/fotografia.png`
];
let foto_jps = [
    `https://api.github.com/repos/${repo}/contents/img/fotografia11.jpeg`,
    `https://api.github.com/repos/${repo}/contents/img/fotografia12.jpeg`,
    `https://api.github.com/repos/${repo}/contents/img/fotografia13.jpeg`,
    `https://api.github.com/repos/${repo}/contents/img/fotografia14.jpeg`,
    `https://api.github.com/repos/${repo}/contents/img/fotografia15.jpeg`,
    `https://api.github.com/repos/${repo}/contents/img/fotografia16.jpeg`
];
let foto_fw = [
    `https://api.github.com/repos/${repo}/contents/img/fotografia21.jpeg`,
    `https://api.github.com/repos/${repo}/contents/img/fotografia22.jpeg`,
    `https://api.github.com/repos/${repo}/contents/img/fotografia23.jpeg`,
    `https://api.github.com/repos/${repo}/contents/img/fotografia24.jpeg`,
    `https://api.github.com/repos/${repo}/contents/img/fotografia25.jpeg`
];


carregarImagens(ft,'ft');
carregarImagens(foto_jps,'foto_jps');
carregarImagens(foto_fw,'foto_fw');

// Imagens Rocktar
let rs1 = [
    `https://api.github.com/repos/${repo}/contents/img/rockstar1.png`,
    `https://api.github.com/repos/${repo}/contents/v/rockstar3.png`,
];
let mup1 = [
    `https://api.github.com/repos/${repo}/contents/img/mockupuser1.png`,
    `https://api.github.com/repos/${repo}/contents/img/mockupuser2.png`,
    `https://api.github.com/repos/${repo}/contents/img/mockupuser3.png`,
];
let mup2 = [
    `https://api.github.com/repos/${repo}/contents/img/mockupmusico1.png`,
    `https://api.github.com/repos/${repo}/contents/img/mockupmusico2.png`,
    `https://api.github.com/repos/${repo}/contents/img/mockupmusico3.png`,
];

let rock_pf1 = [
    `https://api.github.com/repos/${repo}/contents/img/pfuser1.png`,
    `https://api.github.com/repos/${repo}/contents/img/pfuser2.png`,
    `https://api.github.com/repos/${repo}/contents/img/pfuser3.png`,
];
let rock_pf2 = [
    `https://api.github.com/repos/${repo}/contents/img/pfmusico1.png`,
    `https://api.github.com/repos/${repo}/contents/img/pfmusico2.png`,
    `https://api.github.com/repos/${repo}/contents/img/pfmusico3.png`,
];


carregarImagens(rs1, 'rs1');
carregarImagens(mup1,'mup1');
carregarImagens(mup2,'mup2');
carregarImagens(rock_pf1,'rock_pf1');
carregarImagens(rock_pf2,'rock_pf2');


//Imagens T7T
let topo_logo= [
    `https://api.github.com/repos/${repo}/contents/img/t7t1.png`,
    `https://api.github.com/repos/${repo}/contents/img/t7t2.png`,
];

let logo =  [
    `https://api.github.com/repos/${repo}/contents/img/t7t2.png`,
];

let sec_logo= [
    `https://api.github.com/repos/${repo}/contents/img/t7t3.png`
];

let var_logo= [
    `https://api.github.com/repos/${repo}/contents/img/t7t4.png`
];

carregarImagens(topo_logo, 'topo_logo');
carregarImagens(logo,'logo');
carregarImagens(sec_logo,'sec_logo');
carregarImagens(var_logo,'var_logo');


// Imagens do fundo
let imagensPF = [
    `https://api.github.com/repos/${repo}/contents/img/rockstar2.png`,
    `https://api.github.com/repos/${repo}/contents/img/rockstar4.png`,
];

carregarImagens(imagensPF, 'imagePF');

//Imagem picit
let pit2 = [
    `https://api.github.com/repos/${repo}/contents/img/picit2.png`
];

carregarImagens(pit2, 'pit2');
