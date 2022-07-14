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

    nav.appendChild(home);

    const menu = document.createElement('button');
    menu.className = 'tab';
    menu.textContent = 'Menu';

    nav.appendChild(menu);

    const contact = document.createElement('button');
    contact.className = 'tab';
    contact.textContent = 'Contact';

    nav.appendChild(contact);

    header.appendChild(nav);

    return header
}

export {
    header
};