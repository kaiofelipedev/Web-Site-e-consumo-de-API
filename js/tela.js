/******************************************************************************************************
 *  Objetivo: Exibir e esconder o menu na versão mobile
 *  Data: 06/05/2025
 *  Autor: Kaio Felipe
 *  Status: Concluído
 *  Versão: 1.0
*******************************************************************************************************/

const menuSanduiche = document.getElementById('menu-sanduiche')
const menuNav       = document.getElementById('menu-nav')
const conteudo      = document.getElementById('conteudo')

menuSanduiche.addEventListener('click', function(){
    menuNav.style.display = 'block'
})

conteudo.addEventListener('click', function (){
    menuNav.style.display = 'none'
})