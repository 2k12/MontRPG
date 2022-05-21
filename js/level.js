var hpmonstruo = 30;
var level = 1;
var oro = 0;
var poder = 0;
var danio = 1;
let contador = 0;
let preciopoder = 20;
var contadorcompra = 1;
let auxvida = hpmonstruo;
var contadorlevelpd = 0;

// elemento item 
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

const itemminis = document.getElementById('itemminis');
const itemminig = document.getElementById('itemminig');
const itemminisp = document.getElementById('itemminisp');

// contadores de items
let contadoritem = 0;
let contadoritemb=0;
let contadoritemc=0;




/* INICIALES */
document.getElementById('gold').innerHTML = oro;
document.getElementById('poder').innerHTML = "P " + poder
document.getElementById('cantidad-salud').innerHTML = hpmonstruo + " HP";
document.getElementById('nivel').innerHTML = "Lvl. " + level;
const progreso = document.getElementById('progreso');


/**/
document.getElementById('monster').addEventListener("mouseover", juego);

// variable para abrir la ventana de victoria al vencer al monstruo
const modal_container = document.getElementById('modal_container');




item1.addEventListener("click", function () {
   
    // window.alert(contadoritem);
    
    if (contadoritem == 0) {
            
        itemminis.style.opacity = "1";
        danio += 5;
     
        contadoritem=1;
        window.alert("Se agrego Espada Sagrada al Equipamento!");
    }
   else if(contadoritem==1){
    window.alert("Item en uso!");
   
   }
    
   
   
});
item2.addEventListener("click", function () {
   
    
    // window.alert(contadoritemb);
    if (contadoritemb == 0) {

        itemminig.style.opacity = "1";
        oro = oro +50;
        contadoritemb=1;
        window.alert("Se agrego Oro Doble!");
    } else if(contadoritemb==1){
      
        window.alert("Item en uso!");
       
    }
});
item3.addEventListener("click", function () {
   
   
    // window.alert(contadoritemc);
    
    if (contadoritemc == 0) {
            
        itemminisp.style.opacity = "1";
        danio += 100;
     
        contadoritemc=1;
        window.alert("Se agrego Lanza del Destino!");
    }
   else if(contadoritemc==1){
    window.alert("Item en uso!");
   
   }
    
   
   
});

// elemento itemminis
itemminis.addEventListener("click", function () {
    danio = danio - 5;
    window.alert("Se Desequipo Espada Sagrada! ");
    itemminis.style.opacity = "0";
    contadoritem=0;
});
// elemento itemminig
itemminig.addEventListener("click", function () {
    oro - 50;
    window.alert("Se Desequipo Oro Doble! ");
    itemminig.style.opacity = "0";
    contadoritemb=0;

});
// elemento itemminisp
itemminisp.addEventListener("click", function () {
    danio = danio - 100;
    window.alert("Se Desequipo Lanza del Destino! ");
    itemminisp.style.opacity = "0";
    contadoritemc=0;

});


// permite minimizar la ventana de victoria con el boton avanzar
// ---------------------
const botona = document.querySelector("#avanzare");
//----------------------
const botonr = document.querySelector("#repetire");
//----------------------

function mostrar() {
    var x = document.getElementById('moch');
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
    }
}

function itemsword() {

    document.getElementById('item').style.opacity = "0";
    document.getElementById('item1').src = "../media/items/sword.jpg";


}
function itemgold() {

    document.getElementById('itemo').style.opacity = "0";
    document.getElementById('item2').src = "../media/items/coind.jpg";


}
function itemspeard() {

    document.getElementById('itemsp').style.opacity = "0";
    document.getElementById('item3').src = "../media/items/spear.jpg";


}
// Agregar listener
botona.addEventListener("click", function (evento) {
    // Aquí todo el código que se ejecuta cuando se da click al botón
    aumentar();
    modal_container.classList.remove('show')
});
botonr.addEventListener("click", function (evento) {
    // Aquí todo el código que se ejecuta cuando se da click al botón
    disminuir();
    modal_container.classList.remove('show')
});

/*****************************/
const cmblevel = document.getElementById('nivel');
const boton = document.querySelector("#add_iconp");

// Agregar listener
boton.addEventListener("click", function (evento) {
    // Aquí todo el código que se ejecuta cuando se da click al botón

    if (oro >= preciopoder) {
        oro -= preciopoder;
        poder = poder + 3;
        danio += 1;
        contadorcompra++;
        preciopoder = preciopoder + 10;
        document.getElementById('poder').innerHTML = "P " + poder
        document.getElementById('gold').innerHTML = oro;
    } else {
        window.alert("ORO INSUFICINETE!")
    }



});


/**/
function juego() {

    let x = 100;
    let cantidad = 0;
    //-----------------------
    hpmonstruo = hpmonstruo - danio;
    //-----------------------
    cantidad = ((x * hpmonstruo) / auxvida);
    progreso.style.width = `${(parseInt(cantidad))}px`;
    /**/

    if (hpmonstruo <= 0) {
        hpmonstruo = 0;
        oro = oro + 50;
        progreso.style.width = `${(parseInt(100))}px`;
        modal_container.classList.add('show')
        document.getElementById('cantidad-salud').innerHTML = hpmonstruo + " HP";
    }
    // aqui condiciones para dropeo de items segun la condicion que se defina -------

    if (level==5) {

        if (hpmonstruo == 5) {

            contadorlevelpd++;
        
            
            if (contadorlevelpd ==1) {

                document.getElementById('item').style.opacity = "1";
            }
            else {
                document.getElementById('item').style.opacity = "0";

            }
        }
        if (hpmonstruo <= 0) {
            document.getElementById('item').style.opacity = "0";
        }

    }
    else if (level == 10) {
   
       
        if (hpmonstruo == 10) {
            contadorlevelpd++;
            
             
            if (contadorlevelpd == 5) {

                document.getElementById('itemo').style.opacity = "1";
            }
            else {
                document.getElementById('itemo').style.opacity = "0";

            }
        }
        if (hpmonstruo <= 0) {
            document.getElementById('itemo').style.opacity = "0";
        }

    }
    else if (level == 15) {
       
       
        if (hpmonstruo == 10) {
            contadorlevelpd++;
            
             
            if (contadorlevelpd == 3) {

                document.getElementById('itemsp').style.opacity = "1";
            }
            else {
                document.getElementById('itemsp').style.opacity = "0";

            }
        }
        if (hpmonstruo <= 0) {
            document.getElementById('itemsp').style.opacity = "0";
        }

    }

// cambios de monstruos por nivel

    if (level % 10 == 0) {
        document.getElementById('monster').src = "../media/boss.gif";

    }
    else if (level % 2 == 0) {
        document.getElementById('monster').src = "../media/chu.gif";
    } else if (level % 3 == 0) {
        document.getElementById('monster').src = "../media/cir.gif";
    }
    else {
        document.getElementById('monster').src = "../media/ojo.gif";
    }

    document.getElementById('cantidad-salud').innerHTML = hpmonstruo + " HP";

}
function aumentar() {

    level += 1;

    contador += 1;
    hpmonstruo = contador * auxvida;

    document.getElementById('nivel').innerHTML = "Lvl. " + level;
    document.getElementById('cantidad-salud').innerHTML = hpmonstruo + " HP";
    document.getElementById('gold').innerHTML = oro;

}
function disminuir() {
    if (level == 1) {
        level = 1;

        hpmonstruo = auxvida * 1;
    } else {
        level = level;
        hpmonstruo = auxvida * contador;

    }

    document.getElementById('nivel').innerHTML = "Lvl. " + level;
    document.getElementById('cantidad-salud').innerHTML = hpmonstruo + " HP";
    document.getElementById('gold').innerHTML = oro;


}
