function home() {
    const home = document.createElement('div');
    home.setAttribute('id', 'body');

    const title = document.createElement('h2');
    title.textContent = 'COME EAT THE TASTIEST PIZZA IN TOWN!';

    home.appendChild(title);

    return home
}

export {
    home
};