// scripts/skills.js

import cardData from './data-card.js'; // Ajusta la ruta si es necesario

const containerSkills = document.getElementById('container-skills');

const skills = [
    { id: 'html', name: 'HTML', image: 'fa-brands fa-html5' },
    { id: 'css', name: 'CSS', image: 'fa-brands fa-css3-alt' },
    { id: 'javascript', name: 'JavaScript', image: 'fa-brands fa-js' },
    { id: 'vue', name: 'Vue', image: 'fa-brands fa-vuejs' },
    {id:'typescrip',name:'TypeScript',image2:'assets/type-script.png'}
];

export const createCheckbox = () => {
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-item';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = skill.id;
        input.name = 'skills';
        input.value = skill.name;

        const label = document.createElement('label');
        label.htmlFor = skill.id;
        label.className = 'label-item';

        if (skill.image) { // Si tiene un icono
            const icon = document.createElement('i');
            icon.className = skill.image;
            label.appendChild(icon);
        } 
        
        if (skill.image2) { // Si tiene una imagen
            const image = document.createElement('img');
            image.className = 'img-skills-typescript';
            image.src = skill.image2;
            label.appendChild(image);
        }

        const text = document.createTextNode(` ${skill.name}`);
        label.appendChild(text);

        div.appendChild(input);
        div.appendChild(label);
        containerSkills.appendChild(div);
    });
};


export const searchproject = () => {
    let selectedSkills = [];

    const checkboxes = document.getElementsByName('skills');

    Array.from(checkboxes).forEach(checkbox => {
        checkbox.addEventListener('change', function(event) {
            const skillValue = event.target.value;

            if (event.target.checked) {
                if (!selectedSkills.includes(skillValue)) {
                    selectedSkills.push(skillValue);
                }
                console.log(`Checkbox marcado: ${skillValue}`);
            } else {
                selectedSkills = selectedSkills.filter(skill => skill !== skillValue);
                console.log(`Checkbox desmarcado: ${skillValue}`);
            }

            filterCards(selectedSkills);
        });
    });
};

const filterCards = (selectedSkills) => {
    // Si no hay habilidades seleccionadas, muestra todas las tarjetas
    const filteredCards = selectedSkills.length === 0
        ? cardData.cards
        : cardData.cards.filter(card =>
            selectedSkills.some(skill => card.skills.includes(skill))
        );

    // Muestra las tarjetas filtradas en el DOM
    const container = document.querySelector('#cardsContainer');
    container.innerHTML = ''; // Limpiar contenedor antes de renderizar tarjetas filtradas

    filteredCards.forEach(data => {
        const cardHTML = `
            <div class="container-card">
                <div class="img-card">
                    <img src="${data.image}" alt="Card Image">
                </div>
                <hr>
                <span>${data.title}</span>
                <br>
                <span>${data.description}</span>
                <div class="skills-card">
                    ${data.skills.map(skill => `<span>${skill}</span>`).join('')}
                </div>
            </div>
        `;

        container.innerHTML += cardHTML;
    });

    if (filteredCards.length === 0) {
        container.innerHTML = '<p>No se encontraron tarjetas con las habilidades seleccionadas.</p>';
    }
};
