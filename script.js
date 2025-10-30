// Espera o documento carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Pega os elementos principais
    const cardContainer = document.getElementById('cardContainer');
    const cover = document.getElementById('cover');

    // Função para abrir/fechar o convite
    function toggleCard() {
        cardContainer.classList.toggle('open');
    }

    // Adiciona o evento de clique na capa
    cover.addEventListener('click', toggleCard);
});