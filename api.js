
let API = "https://api.thecatapi.com/v1/images/search";
const cards = document.getElementById("cards");

const getApiData = async (urlApi) => {
    const respostaAPI = await fetch(urlApi);
    if (respostaAPI.status === 200) {
        const dadosConvertidos = respostaAPI.json();
        return dadosConvertidos;
    }
};

async function gerar() {
    const dados = await getApiData(API)
    dados.slice(0, 10).forEach(personagem => {
        const divCard = document.createElement('div')
        divCard.className = "card"

        let srcImg = personagem.url.toString()
        const url = document.createElement('img')
        url.src = (srcImg)
        url.className = "img";

        const id = document.createElement('p')
        id.textContent =  (`Nome: ${personagem.id}`)
        id.className = "p";

        const arrayElementos = [url, id, 
        ]

        arrayElementos.forEach(elemento => {
            divCard.appendChild(elemento)
        });
        cards.appendChild(divCard)
    });
}

gerar()

async function rodarfunction() {
    console.log(await getApiData(API))
}

rodarfunction()
