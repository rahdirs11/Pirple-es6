'use strict';

let games = [
    'Assassins Creed: Valhalla',
    'Far cry: New Dawn',
    'Fifa 20',
    'Age of Empires 2: Definitive Edition',
    'Forza Horizon 4',
    'Watch Dogs 2',
    'Call of Duty',
    'SIMS',
    'Mortal Kombat XL',
    'Crysis',
]

let colors = [
    '#5DADE2',
    '#F4D03F',
    '#58D68D',
    '#A569BD',
    '#E74C3C',
    '#40E0D0',
    '#6495ED',
    '#DE3163',
    '#9FE2BF',
    '#FF7F50'
]

let body = document.getElementsByTagName('body')[0]
let div, p


for (let i = 0; i < 10; ++i) {
    div = document.createElement('div')
    div.classList.add('rectangle')
    div.style.backgroundColor = colors[i]
    div.style.fontFamily = 'monospace'

    p = document.createElement('p')
    p.innerHTML = `Color code: ${colors[i]}`

    body.appendChild(div)
    body.appendChild(p)

    div.textContent = games[i]
    p.style.padding = '3% 45%'
}