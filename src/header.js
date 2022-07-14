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
        document.querySelector('#Home').style.display = 'flex';
        document.querySelector('#Menu').style.display = 'none';
        document.querySelector('#About').style.display = 'none';
    });

    mouseListener(home);

    nav.appendChild(home);

    const menu = document.createElement('button');
    menu.className = 'tab';
    menu.textContent = 'Menu';

    menu.addEventListener('click', () => {
        home.style.borderBottom = '2px solid transparent';
        menu.style.borderBottom = '2px solid black';
        about.style.borderBottom = '2px solid transparent';
        document.querySelector('#Home').style.display = 'none';
        document.querySelector('#Menu').style.display = 'grid';
        document.querySelector('#About').style.display = 'none';
    });

    mouseListener(menu);

    nav.appendChild(menu);

    const about = document.createElement('button');
    about.className = 'tab';
    about.textContent = 'About';

    about.addEventListener('click', () => {
        home.style.borderBottom = '2px solid transparent';
        menu.style.borderBottom = '2px solid transparent';
        about.style.borderBottom = '2px solid black';
        document.querySelector('#Home').style.display = 'none';
        document.querySelector('#Menu').style.display = 'none';
        document.querySelector('#About').style.display = 'flex';
    });

    mouseListener(about);

    nav.appendChild(about);

    header.appendChild(nav);

    return header
}

function mouseListener(element) {
    element.addEventListener('mouseover', () => {
        element.style.borderBottom = '2px solid black';
    });

    element.addEventListener('mouseleave', () => {
        if (document.getElementById(element.firstChild.data).style.display == 'none') {
            element.style.borderBottom = '2px solid transparent';
        }
    });
}

export {
    header
};