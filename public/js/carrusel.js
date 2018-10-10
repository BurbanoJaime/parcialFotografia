var ima = document.querySelector(".imagen");

var imagenes = [];
var selectores = [];
var estado = 1;
for (var i = 0; i < 17; i++) {
    imagenes.push("/imagenes/parcial/Mesa de trabajo " + i + ".png");
    console.log("Imagenes Cargadas");
}
ima.style.backgroundImage = 'url("' + imagenes[estado] + '")';
//ima.style.backgroundColor = "red";


console.log();

for (var i = 0; i < 17; i++) {
    selectores.push(document.getElementById(i));
    if (selectores[i]) {
        selectores[i].addEventListener("click", function () {
            console.log(estado);
        });
    }
}



var izq = document.querySelector(".flechas_left").addEventListener("click", function () {
    if (estado > 2) {
        selectores[estado].classList.remove("activo");
        estado--;
        selectores[estado].classList.add("activo");
        ima.style.backgroundImage = 'url("' + imagenes[estado] + '")';

    }

    console.log("cambio izquierda" + estado);
});

var der = document.querySelector(".flechas_right").addEventListener("click", function () {
    if (estado < 16) {
        selectores[estado].classList.remove("activo");
        estado++;
        selectores[estado].classList.add("activo");
        ima.style.backgroundImage = 'url("' + imagenes[estado] + '")';

    }


    console.log("cambio derecha" + estado);

});

setInterval(function () {
    console.log("cambiar");
    selectores[estado].classList.remove("activo");
    estado++;
    selectores[estado].classList.add("activo");
    ima.style.backgroundImage = 'url("' + imagenes[estado] + '")';

    if (estado >= 16) {
        estado = 0;
    }
}, 10000);