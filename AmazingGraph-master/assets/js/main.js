const menu = document.querySelector('.menu-aberto ul');
let aberto = false;

function mostraMenu(){    
    if(aberto){
        menu.style.display = 'none';
        aberto = false;
    } else {
        menu.style.display = 'inline-block';
        aberto = true;
    }
    console.log(aberto);
}