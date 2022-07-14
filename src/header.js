function header () {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.textContent = 'Pizza restaurant';

    header.appendChild(title);

    const nav = document.createElement('nav');

    const home = document.createElement('button');
    home.className = 'tab';
    home.textContent = 'Home';

    home.addEventListener('click', () => {
        document.querySelector('#home').style.display = 'flex';
        document.querySelector('#about').style.display = 'none';
    })

    nav.appendChild(home);

    const menu = document.createElement('button');
    menu.className = 'tab';
    menu.textContent = 'Menu';

    nav.appendChild(menu);

    const about = document.createElement('button');
    about.className = 'tab';
    about.textContent = 'About';

    about.addEventListener('click', () => {
        document.querySelector('#home').style.display = 'none';
        document.querySelector('#about').style.display = 'flex';
    })

    nav.appendChild(about);

    header.appendChild(nav);

    return header
}

export {
    header
};