import Icon from './assets/cowabunga.png';

function home() {
    const home = document.createElement('div');
    home.setAttribute('id', 'Home');
    home.style.display = 'flex';

    const hero = document.createElement('div');
    hero.setAttribute('id', 'hero');

    const title = document.createElement('h2');
    title.textContent = 'COME EAT THE TASTIEST PIZZA IN TOWN!';

    hero.appendChild(title);

    const icon = new Image();
    icon.src = Icon;
    hero.appendChild(icon);

    home.appendChild(hero);

    const booking = document.createElement('button');
    booking.setAttribute('id', 'booking');
    booking.textContent = 'Book a table now';
    
    home.appendChild(booking);

    return home
}

export {
    home
};