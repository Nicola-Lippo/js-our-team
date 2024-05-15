'use strict'
console.log('eccomi')
//MILESTONE 0
//Creare l’array di oggetti con le informazioni fornite
const myArrayTeams = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Fouder e CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroli',
        ruolo: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Media Menager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scot Estrada',
        ruolo: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramon',
        ruolo: 'Grafica',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
];
console.log(myArrayTeams);
//MILESTONE 2
//Stampare le stesse informazioni su DOM sottoforma di stringhe
const ul = document.querySelector('.team');
for (let i = 0; i < myArrayTeams.length; i++) {
    //creo una variabile per leggere i valori degli oggetti
    const attributi = myArrayTeams[i];
    //MILESTONE 1
    //Stampare su console, per ogni membro del team, le informazioni
    console.log(attributi)
    const li = document.createElement('li');
    //stampo nome
    const h2 = document.createElement('h2');
    h2.append(attributi.nome);
    li.append(h2);
    ul.append(li);
    //stampo ruolo
    const div = document.createElement('div');
    div.append(attributi.ruolo);
    li.append(div);
    ul.append(li);
    //stampo foto inn console
    const p = document.createElement('p');
    p.append(attributi.img);
    li.append(p);
    ul.append(li);
    //BONUS 1
    //stampo foto nella pagina HTML
    const imgPersona = document.createElement('img');
    imgPersona.src = 'img/' + attributi.img;
    li.append(imgPersona)

}
