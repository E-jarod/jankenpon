import * as jkp from './function';

const main = document.getElementById('main');
main.style.width = '100%';
main.style.height = '100%';

const title = document.createElement('h1');
title.innerHTML = 'Jan Ken Pon';
title.style.textAlign = 'center';
main.appendChild(title);

const container = document.createElement('div');
container.style.display = 'flex';
container.style.width = '100%';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

const info = document.createElement('p');
info.innerHTML = 'Pierre = 1, Papier = 2, Ciseaux = 3';
container.appendChild(info);

const ask = document.createElement('p');
ask.innerHTML = 'Jouez :';
container.appendChild(ask);

const input = document.createElement('input');
input.type = 'text';
input.style.marginLeft = 'auto';
input.style.marginRight = 'auto';
input.style.textAlign = 'center';
container.appendChild(input);


main.appendChild(container);
