'use strict'
console.log('eccomi')
//MILESTONE 0
//Creare l’array di oggetti con le informazioni fornite
const myArrayTeams = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Fouder e CEO',
        img: '',
    },

    {
        nome: 'Angela Caroli',
        ruolo: 'Chief Editor',
        img: '',
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Manager',
        img: '',
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Media Menager',
        img: '',
    },

    {
        nome: 'Scot Estrada',
        ruolo: 'Developer',
        img: '',
    },

    {
        nome: 'Barbara Ramon',
        ruolo: 'Grafica',
        img: '',
    },
];
//MILESTONE 1
//Stampare su console, per ogni membro del team, le informazioni
console.log(myArrayTeams);
//MILESTONE 2
//Stampare le stesse informazioni su DOM sottoforma di stringhe
const ul = document.querySelector('.team');
for (let i = 0; i < myArrayTeams.length; i++) {
    //creo una variabile per leggere i valori degli oggetti
    const attributi = myArrayTeams[i];
    //stampo nome
    const li = document.createElement('li');
    li.append(attributi.nome);
    li.append(ul);
}