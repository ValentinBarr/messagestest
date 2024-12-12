const { hash } = window.location;
const message = atob(hash.replace('#',''));

if (message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

const input = document.querySelector('input');

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    //ocultar y mostrar las diferentes cards
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    //seleccion del input y codificamos en b64
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    //agregamos lo codificado al final de la url
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select(); //este metodo selecciona el texto para que sea facil de copiar 

});