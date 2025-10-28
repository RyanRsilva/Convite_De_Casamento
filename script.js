document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.card-container');
    const cover = document.querySelector('.cover');

    cover.addEventListener('click', function() {
        cardContainer.classList.toggle('open');
    });
});
