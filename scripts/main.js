import cardData from '../scripts/data-card.js'; // Ajusta la ruta si es necesario
import {createCheckbox, searchproject} from '../scripts/searchskills.js'

document.addEventListener('DOMContentLoaded', () => {
    const containerSkills = document.getElementById('container-skills');
    createCheckbox(containerSkills)
    searchproject()

    const createCard = (data) => {
        const cardHTML = `
            <div class="container-card">
                <div class="img-card">
                    <img src="${data.image}" alt="Card Image">
                </div>
                <hr>
                <span class='span-title'>${data.title}</span>
                <br>
                <span class='span-description'>${data.description}</span>
                <div class="skills-card">
                    ${data.skills.map(skill => `<span>${skill}</span>`).join('')}
                </div>
            </div>
        `;

        const container = document.querySelector('#cardsContainer');
        if (container) {
            container.innerHTML += cardHTML; // Añade la tarjeta al contenedor
        } else {
            console.error('Contenedor con ID "cardsContainer" no encontrado');
        }
    };

    const renderCards = () => {
        if (cardData && cardData.cards && Array.isArray(cardData.cards)) {
            cardData.cards.forEach(data => createCard(data));
        } else {
            console.error('cardData.cards no está definido o no es un array');
        }
    };

    renderCards();


});
