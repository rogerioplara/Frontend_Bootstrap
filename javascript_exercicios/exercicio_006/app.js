/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */

//função para esconder todos os elementos que iniciem com a palavra info [id^="info"], utilizando a propriedade do bootstrap 'd-none'
function hide_all(){
    document.querySelectorAll('[id^="info"]').forEach((e) => {
        e.classList.add('d-none')
    });
}

function show_tab(id){
    document.querySelector('#info' + id).classList.remove('d-none');
}

document.querySelectorAll('[id^="tab"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        hide_all();
        show_tab(btn.target.id.substring(3))
    })
})

hide_all()
show_tab(1)
