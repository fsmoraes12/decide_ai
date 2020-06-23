//funcoes com as listas de filmes e séries

export function randonFilmes() {
    const lista_filmes = ['o poderoso chefão',
        'laranja mecanica',
        'pulp fiction',
        'kill bill: vol. 1',
        'cidade de deus',
        'à espera de um milagre',
        'machete',
        'planeta terror',
        'mad max: estrada da furia',
        'bastardos inglorios',
        'forrest gump: o contador de histórias',
        'a origem',
        'Logan',
        'Akira',
        'Django livre'
    ]

    alert(Filmes = lista_filmes[Math.floor(Math.random() * lista_filmes.length)])
}

export function randonSeries() {
    const lista_series = ['dark',
        'stranger things',
        'the 100',
        'perdidos no espaço',
        'peak blinders',
        'lucifer',
        'brooklin 99',
        'the walking dead',
        'grays anatomy',
        'the umbrella academy',
        'demolidor',
        'rick e morty']

    alert(Series = lista_series[Math.floor(Math.random() * lista_series.length)])

}

