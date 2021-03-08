let indice = 1;

muestraslide(indice);
function avanzaslide(n){
    muestraslide(indice+=n);
}

function position(n){
    muestraslide(indice=n);
}

setInterval(function tiempo(){
    muestraslide(indice+=1);
}, 4000);

function muestraslide(n){
    let i;
    let slide = document.getElementsByClassName("contenidoslide");
    let barra = document.getElementsByClassName("barra");

    if(n> slide.length){
        indice = 1;
    }
    if(n < 1){
        indice = slide.length();
    }
    for(i=0; i < slide.length;i++){
        slide[i].style.display = "none"
    }
    for(i=0; i < barra.length;i++){
        barra[i].className = barra[i].className.replace("activa", "");
    }

    slide[indice-1].style.display = "block";
    barra[indice-1].className += " activa";
}