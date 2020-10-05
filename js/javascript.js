  bienvenida();

function bienvenida() {
  var nombre = prompt("Ingresa tu nombre");

  alert("Bienvenid@ a nuestra pagina " + nombre);  
}

function cotizacion() {
  prompt("ingresa un numero");
}

function precio() {
  var verificar = confirm("¿Quiere realizar una compra?");
  if (verificar) {
    alert("¡Gracias por confirmar!");
    
      var producto = prompt("Selecciona el numero para seleccionar el producto: \r 1. caja chica \r 2. caja mediana \r 3. caja grande");
      var resul, pre;
      switch (producto) {
        case '1':
          var cantidad = prompt("¿Que cantidad quiere comprar?");
            pre = 5;
            resul = cantidad * pre;
            alert("la cantidad es: \r $" + pre +" x " +cantidad +  " = " + resul);
            console.log("la cantidad es: \r $" + pre +" x " +cantidad +  " = " + resul);
          break;
          case '2':
            var cantidad = prompt("¿Que cantidad quiere comprar?");
            pre = 11;
            resul = cantidad * pre;
            alert("la cantidad es: \r $" + pre +" x " +cantidad +  " = " + resul);
            console.log("la cantidad es: \r $" + pre +" x " +cantidad +  " = " + resul);
          break;
          case '3':
            var cantidad = prompt("¿Que cantidad quiere comprar?");
            pre = 20;
            resul = cantidad * pre;
            alert("la cantidad es: \r $" + pre +" x " +cantidad +  " = " + resul);
            console.log("la cantidad es: \r $" + pre +" x " +cantidad +  " = " + resul);
          break;
      
        default:
          alert("el producto no existe")
          break;
      }
    }
    else {
    alert("¡Haz denegado la compra!");
    }
  
  
  
}

        fecha();
        var timee = setInterval(fecha,1000);
 function fecha() {
     
 
var d = new Date();

var yearss = d.getFullYear();
var mes = d.getMonth();

if (mes < 10 ) {
    mes = "0"+mes;
  }
var dia = d.getDate();

if (dia < 10 ) {
    dia = "0"+dia;
  }


document.getElementById("yyyy").innerHTML =yearss;
document.getElementById("mm").innerHTML = mes;
document.getElementById("dd").innerHTML = dia;

var horas = d.getHours();
if (horas ==0) {
  horas= 12;    
}
if (horas >12) {
    horas= horas-12;    
}

if (horas < 10 ) {
    horas= "0"+horas;
  }
var segundos = d.getSeconds();

if (segundos < 10 ) {
    segundos = "0"+segundos;
  }

var minutos = d.getMinutes();

if (minutos < 10 ) {
    minutos = "0"+minutos;
  }

document.getElementById("hh").innerHTML = horas;
document.getElementById("ss").innerHTML = segundos;
document.getElementById("sm").innerHTML = minutos;

}       
