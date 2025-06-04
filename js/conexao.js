/************************************************************************************************************
 *  Objetivo - Desenvolver a integração e consumo de dados da API (Simpsons - https://thesimpsonsquoteapi.glitch.me/)
 *  Desenvolvedor - Kaio Felipe
 *  Data - 24/04/2025
 *  Versão - 1.0
 *  Status - CONCLUÍDO
 ************************************************************************************************************/

// URL da API
const APIURL = `https://thesimpsonsquoteapi.glitch.me/quotes?count=6`

// Variável que receb o conteiner de cards
const CONTEINER = document.getElementById('conteiner-cards')

// Função que consome a API e cria os cards
const APICONECT = async function(){
    
    let dados = ''

    try {
        let response = await fetch(APIURL)
        dados = await response.json()
    } catch (erro) {
        alert(`Erro: ${erro}`)
    }

    // Loop pelos itens do Json retornado pela API
    dados.forEach(function(item){
        // Criar elemento
        let divCard  = document.createElement('div')
        let nameCard = document.createElement('h4')
        let foto     = document.createElement('img')
        let sobre    = document.createElement('p')

        // Adicionar atributos
        divCard.setAttribute('class', 'card')
        foto.setAttribute('src', item.image)

        // Adicionar textos
        nameCard.innerText = item.character
        sobre.innerText = item.quote

        // Adicionar ao conteiner pai
        CONTEINER.appendChild(divCard)
        divCard.appendChild(nameCard)
        divCard.appendChild(foto)
        divCard.appendChild(sobre)
    })
}

// Evento para carregar os cards
window.addEventListener('load', async function(){
    await APICONECT()
})