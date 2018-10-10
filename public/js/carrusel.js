var carrusel = setInterval(cambiar, 5000);

var imagenes=["/imagenes/parcial/1.jpg","/imagenes/parcial/2.jpg","/imagenes/parcial/3.jpg","/imagenes/parcial/4.jpg","/imagenes/parcial/5.jpg","/imagenes/parcial/6.jpg","/imagenes/parcial/7.jpg","/imagenes/parcial/8.jpg","/imagenes/parcial/9.jpg","/imagenes/parcial/10.jpg","/imagenes/parcial/11.jpg","/imagenes/parcial/12.jpg","/imagenes/parcial/13.jpg","/imagenes/parcial/14.jpg","/imagenes/parcial/15.jpg","/imagenes/parcial/16.jpg"];

var i = 0;

function cambiar(){
    var selec = document.querySelector(".carrusel .fotos");

    switch (i){
        case 0:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[0] + ")";
        
        i++;
        break;

        case 1:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[1] + ")";

        i++;
        break;

        case 2:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[2] + ")";

        i++;
        break;

        case 3:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[3] + ")";
 
        i++;
        break;

        case 4:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[4] + ")";

        i++;
        break;

        case 5:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[5] + ")";
        
        i++;
        break;

        case 6:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[6] + ")";
  
        i++;
        break;

        case 7:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[7] + ")";
        
        back.style.transition = "all .5s";
        back.style.backgroundImage = "url(" + imagenes[7] + ")";


        i++;
        break;

        case 8:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[8] + ")";
 
        i++;
        break;

        case 9:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[9] + ")";
   
        i++;
        break;

        case 10:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[10] + ")";
  
        i++;
        break;

        case 11:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[11] + ")";
        
         i++;
        break;

        case 12:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[12] + ")";
 
        i++;
        break;

        case 13:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[13] + ")";


        i++;
        break;

        case 14:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[14] + ")";

        i++;
        break;

        case 15:
        selec.style.transition = "all .5s";
        selec.style.backgroundImage = "url(" + imagenes[15] + ")";

        i++;
        break;
    }

    if (i > 15) {
        i = 0;
    }
    console.log(i);

}