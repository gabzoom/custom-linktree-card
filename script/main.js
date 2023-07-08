const card = window.document.querySelector('.card');
const mediaQuery = window.matchMedia('(min-width: 1024px)');

//adiciona os atributos caso a largura mínima seja 1024px ao carregar a página
if (mediaQuery.matches) {
    document.onload = setTiltData();
}

//intercepta mudanças na mediaQuery e executa o que a callback definiu
mediaQuery.addEventListener('change', handleMediaQueryChange);

//adiciona a lista de atributos necessários pro vaniila-tilt.js
function setTiltData() {
    card.setAttribute('data-tilt', '');
    card.setAttribute('data-tilt-max', '4');
    card.setAttribute('data-tilt-glare', '');
    card.setAttribute('data-tilt-max-glare', '0.1');
}

//remove a lista de attributos
function removeTiltData() {
    card.removeAttribute('data-tilt');
    card.removeAttribute('data-tilt-max', '4');
    card.removeAttribute('data-tilt-glare', '');
    card.removeAttribute('data-tilt-max-glare', '0.1');
}

//define o que executar se houver mudanças na largura da mediaQuery
function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
        setTiltData();
    } else {
        removeTiltData();
    }
}
