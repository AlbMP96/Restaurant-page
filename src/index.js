import './styles/main.scss';

import {home} from './home';
import {header} from './header';
import {about} from './about';


function main() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    element.appendChild(header());

    element.appendChild(home());

    element.appendChild(about());

    return element;
}

document.body.appendChild(main());