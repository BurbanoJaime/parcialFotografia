//var carrusel = setInterval(cambiar, 5000);
var ima = document.querySelector(".imagen");

var imagenes = [];
var selectores = [];
var estado = 1;
for (var i = 0; i < 17; i++) {
    imagenes.push("/imagenes/parcial/Mesa de trabajo " + i + ".png");
    console.log("Imagenes Cargadas");
}



for (var i = 0; i < 17; i++) {
    selectores.push(document.getElementById(i));
    if (selectores[i]) {
        selectores[i].addEventListener("click", function () {
            estado = selectores.indexOf(this);
            selectores[estado].classList.add("activo");
            console.log(estado);
        });
    }
}

ima.style.backgroundImage = "url(" + imagenes[estado] + ")";


var izq = document.querySelector(".flechas_left").addEventListener("click", function () {
    if (estado > 2) {
        selectores[estado].classList.remove("activo");
        estado--;
        selectores[estado].classList.add("activo");
    }

    console.log("cambio izquierda" + estado);
});

var der = document.querySelector(".flechas_right").addEventListener("click", function () {
    if (estado < 16) {
        selectores[estado].classList.remove("activo");
        estado++;
        selectores[estado].classList.add("activo");
    }

   
    console.log("cambio derecha" + estado);

});

