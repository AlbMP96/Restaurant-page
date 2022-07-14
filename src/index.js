import './styles/main.scss';

import {home} from './home';
import {header} from './header';


function main() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    element.appendChild(header());

    element.appendChild(home());

    return element;
}

document.body.appendChild(main());