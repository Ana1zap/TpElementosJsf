console.log("add conectado correctamente")

const qs = q => document.querySelector(q)
let h1 = qs('h1');
let section = qs('section');
let article = qs('article');

h1.innerText += ' AGREGAR PELÍCULAS'

h1.classList.add('titulo')
article.classList.toggle('fondoTransparente')
section.classList.toggle('fondoCRUD')

