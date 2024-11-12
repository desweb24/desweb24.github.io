async function carregarImagens(urls, id) {

    for (const url of urls) {
       
        if (resposta.ok) {
            const dados = await resposta.json();
            const imagemURL = dados.download_url;
            const imagemElemento = document.createElement('img');
            imagemElemento.src = imagemURL;
            document.getElementById(id).appendChild(imagemElemento);
        } else {
            console.error(`Erro ao carregar a imagem de ${url}: ${resposta.statusText}`);
        }
    }
}


const repo = 'desweb24/portfolio';

//Imagens Página Index
const img1 =[
    `https://api.github.com/repos/${repo}/contents/homepage.jpeg`
];
const imgRS = [
    `https://api.github.com/repos/${repo}/contents/rockstar1.png`
];
const imgPIT = [
    `https://api.github.com/repos/${repo}/contents/picit1.png`
];

carregarImagens(img1,'img1');
carregarImagens(imgRS,'imgRS');
carregarImagens(imgPIT,'imgPIT');

//Imagens Página Sobre
const imgSobre = [
    `https://api.github.com/repos/${repo}/contents/sobre.JPG`
];

carregarImagens(imgSobre,'imgSobre');

//imagem fotografia
const ft = [
    `https://api.github.com/repos/${repo}/contents/fotografia.png`
];
const foto_jps = [
    `https://api.github.com/repos/${repo}/contents/fotografia1_1.jpeg`,
    `https://api.github.com/repos/${repo}/contents/fotografia1_2.jpeg`,
    `https://api.github.com/repos/${repo}/contents/fotografia1_3.jpeg`,
    `https://api.github.com/repos/${repo}/contents/fotografia1_4.jpeg`,
    `https://api.github.com/repos/${repo}/contents/fotografia1_5.jpeg`,
    `https://api.github.com/repos/${repo}/contents/fotografia1_6.jpeg`
];
const foto_fw = [
    `https://api.github.com/repos/${repo}/contents/fotografia2_1.jpeg`,
    `https://api.github.com/repos/${repo}/contents/fotografia2_2.jpeg`,
    `https://api.github.com/repos/${repo}/contents/fotografia2_3.jpeg`,
    `https://api.github.com/repos/${repo}/contents/fotografia2_4.jpeg`,
    `https://api.github.com/repos/${repo}/contents/fotografia2_5.jpeg`
];


carregarImagens(ft,'ft');
carregarImagens(foto_jps,'foto_jps');
carregarImagens(foto_fw,'foto_fw');

// Imagens Rocktar
const rs1 = [
    `https://api.github.com/repos/${repo}/contents/rockstar1.png`,
    `https://api.github.com/repos/${repo}/contents/rockstar3.png`,
];
const mup1 = [
    `https://api.github.com/repos/${repo}/contents/mockup_user1.png`,
    `https://api.github.com/repos/${repo}/contents/mockup_user2.png`,
    `https://api.github.com/repos/${repo}/contents/mockup_user3.png`,
];
const mup2 = [
    `https://api.github.com/repos/${repo}/contents/mockup_musico1.png`,
    `https://api.github.com/repos/${repo}/contents/mockup_musico2.png`,
    `https://api.github.com/repos/${repo}/contents/mockup_musico3.png`,
];

const rock_pf1 = [
    `https://api.github.com/repos/${repo}/contents/pf_user1.png`,
    `https://api.github.com/repos/${repo}/contents/pf_user2.png`,
    `https://api.github.com/repos/${repo}/contents/pf_user3.png`,
];
const rock_pf2 = [
    `https://api.github.com/repos/${repo}/contents/pf_musico1.png`,
    `https://api.github.com/repos/${repo}/contents/pf_musico2.png`,
    `https://api.github.com/repos/${repo}/contents/pf_musico3.png`,
];


carregarImagens(rs1, 'rs1');
carregarImagens(mup1,'mup1');
carregarImagens(mup2,'mup2');
carregarImagens(rock_pf1,'rock_pf1');
carregarImagens(rock_pf2,'rock_pf2');


//Imagens T7T
const topo_logo= [
    `https://api.github.com/repos/${repo}/contents/t7t_1.png`,
    `https://api.github.com/repos/${repo}/contents/t7t_2.png`,
];

const logo =  [
    `https://api.github.com/repos/${repo}/contents/t7t_2.png`,
];

const sec_logo= [
    `https://api.github.com/repos/${repo}/contents/t7t_3.png`
];

const var_logo= [
    `https://api.github.com/repos/${repo}/contents/t7t_4.png`
];

carregarImagens(topo_logo, 'topo_logo');
carregarImagens(logo,'logo');
carregarImagens(sec_logo,'sec_logo');
carregarImagens(var_logo,'var_logo');


// Imagens do fundo
const imagensPF = [
    `https://api.github.com/repos/${repo}/contents/rockstar2.png`,
    `https://api.github.com/repos/${repo}/contents/rockstar4.png`,
];

carregarImagens(imagensPF, 'imagePF');

//Imagem picit
const pit2 = [
    `https://api.github.com/repos/${repo}/contents/picit2.png`
];

carregarImagens(pit2, 'pit2');