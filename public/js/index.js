console.log("index conectado correctamente")


const qs = q => document.querySelector(q)
let main = qs('main');
let h2 = qs('h2');
let a = qs('a');
let parrafos = document.querySelectorAll('p');

const $ = id => document.getElementById(id)

let nombre = prompt('Decime tu nombre')

if(nombre){
    h2.innerText += ' ' + nombre;
    h2.style.color = 'red'
}else{
    h2.innerText += ' invitado'
    h2.style.textTransform = 'uppercase'
    a.style.color = "#E51B3E"

    let response = confirm('¿Queres cambiar el color de fondo?')

    if(response){
        document.body.classList.add('fondo')
    }
    for (let i = 0; i  < parrafos.length; i++) {

        if(i%2==0){
            parrafos[i].classList.add('destacadoPar')
        }else{
            parrafos[i].classList.add('destacadoImpar')
        }
              
    }
 
}

