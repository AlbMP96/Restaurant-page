import Bbq from './assets/BBQ.png';
import Cheese from './assets/FourCheese.png';
import Pepperoni from './assets/TonyPepperoni.png';
import Extravaganzza from './assets/Extravaganzza.png';

function menu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const imgs = [{
            name: 'BBQ',
            img: Bbq
        },
        {
            name: 'Four Cheese',
            img: Cheese
        },
        {
            name: 'Tony Pepperoni',
            img: Pepperoni
        },
        {
            name: 'Extravaganzza',
            img: Extravaganzza
        }
    ];

    imgs.forEach(pizza => {
        const card = document.createElement('div');
        card.className = 'pizza';

        const img = new Image();
        img.src = pizza.img;
        card.appendChild(img);

        const name = document.createElement('p');
        name.textContent = pizza.name;
        card.appendChild(name);

        menu.appendChild(card);
    });

    return menu;
}

export {
    menu
}