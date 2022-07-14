function header() {
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
        home.style.borderBottom = '2px solid black';
        menu.style.borderBottom = '2px solid transparent';
        about.style.borderBottom = '2px solid transparent';
        document.querySelector('#home').style.display = 'flex';
        document.querySelector('#menu').style.display = 'none';
        document.querySelector('#about').style.display = 'none';
    });

    home.addEventListener('mouseover', () => {
        home.style.borderBottom = '2px solid black';
    });

    home.addEventListener('mouseleave', () => {
        if (document.getElementById('menu').style.display != 'none' || document.getElementById('about').style.display != 'none') {
            home.style.borderBottom = '2px solid transparent';
        }
    });

    nav.appendChild(home);

    const menu = document.createElement('button');
    menu.className = 'tab';
    menu.textContent = 'Menu';

    menu.addEventListener('click', () => {
        home.style.borderBottom = '2px solid transparent';
        menu.style.borderBottom = '2px solid black';
        about.style.borderBottom = '2px solid transparent';
        document.querySelector('#home').style.display = 'none';
        document.querySelector('#menu').style.display = 'grid';
        document.querySelector('#about').style.display = 'none';
    });

    menu.addEventListener('mouseover', () => {
        menu.style.borderBottom = '2px solid black';
    });

    menu.addEventListener('mouseleave', () => {
        if (document.getElementById('home').style.display != 'none' || document.getElementById('about').style.display != 'none') {
            menu.style.borderBottom = '2px solid transparent';
        }
    });

    nav.appendChild(menu);

    const about = document.createElement('button');
    about.className = 'tab';
    about.textContent = 'About';

    about.addEventListener('click', () => {
        home.style.borderBottom = '2px solid transparent';
        menu.style.borderBottom = '2px solid transparent';
        about.style.borderBottom = '2px solid black';
        document.querySelector('#home').style.display = 'none';
        document.querySelector('#menu').style.display = 'none';
        document.querySelector('#about').style.display = 'flex';
    });

        about.addEventListener('mouseover', () => {
            about.style.borderBottom = '2px solid black';
        });

        about.addEventListener('mouseleave', () => {
            if (document.getElementById('home').style.display != 'none' || document.getElementById('menu').style.display != 'none') {
                about.style.borderBottom = '2px solid transparent';
            }
        });

    nav.appendChild(about);

    header.appendChild(nav);

    return header
}

export {
    header
};