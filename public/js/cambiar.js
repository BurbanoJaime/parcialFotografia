var mover = setInterval(cambiarPromo, 5000);

var promo = ["/imagenes/fondo.jpg", "/imagenes/fondodos.jpg", "/imagenes/fondotres.jpg", "/imagenes/fondocuatro.jpg"];

var i = 1;

function cambiarPromo() {
    var ima = document.querySelector(".fondo");

    switch (i) {
        case 0:
            i++;
            ima.style.backgroundImage = "url(" + promo[0] + ")";
            break;

        case 1:
            ima.style.backgroundImage = "url(" + promo[1] + ")";
            i++;
            break;

            case 2:
            ima.style.backgroundImage = "url(" + promo[2] + ")";
            i++;
            break;

            case 3:
            ima.style.backgroundImage = "url(" + promo[3] + ")";
            i++;
            break;

    }

    if (i > 3) {
        i = 0;
    }
    console.log(i);
}