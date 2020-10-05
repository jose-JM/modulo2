var precios=[5,11,20,15,20,40,3,8,10,20,0];
var objetos=["caja chica","caja mediana","caja grande","cinta","cuerda delgada","cuerda gruesa","papel","plastico de burbuja","Tijeras","poliestireno","no seleccionado"];    


function arreglo(n) {
    var n=n;
    var productos=["caja grande" , "caja mediana" , "caja chica"];
    var productos1 =["cinta grande", "cuerda delgada", "cuerda gruesa"];
    switch (n) {
        case 1:
            document.getElementById("producto").innerHTML=productos;        
            break;
        case 2:
            document.getElementById("producto").innerHTML=productos.length;        
            break;
        case 3:
            var nuevo = prompt("ingrese el nuevo producto al final");
            productos.push(nuevo);
            alert("se a añadido un nuevo producto");
            document.getElementById("producto").innerHTML=productos;
            break;
        case 4:
            var nuevo = prompt("ingrese el nuevo producto al inicio");
            productos.unshift(nuevo);
            alert("se a añadido un nuevo producto");
            document.getElementById("producto").innerHTML=productos;
            break;
        case 5:
            alert("esta apunto de eliminar un producto \r"+productos);        
            productos.pop();
            document.getElementById("producto").innerHTML=productos;        

            break;
        case 6:
            alert("esta apunto de eliminar un producto \r"+productos);        
            productos.shift();
            document.getElementById("producto").innerHTML=productos;        
            break;
        case 7:
            alert("desordenados \r"+productos);        
            productos.sort();
            document.getElementById("producto").innerHTML=productos;        
            break;
        case 8:
            alert("productos \r"+productos);        
            productos.reverse();
            document.getElementById("producto").innerHTML="reversa"+productos;        
            break;
        case 9:
            alert("productos \r"+productos);        
            var copia=productos.slice(0,2);
            document.getElementById("producto").innerHTML=copia;        
            break;

        case 10:
            alert("agregar 2 (cinta, cuerda) y eliminar (caja mediana) \r"+productos);        
            productos.splice(1, 1, "cinta", "cuerda");
            document.getElementById("producto").innerHTML=productos;        
            break;
        case 11:
            alert("Concatenacion de: \r"+productos+"\r"+productos1);        
            resu=productos.concat(productos1);
            document.getElementById("producto").innerHTML=resu;        
            break;
    
        default:
            alert("error");
            break;
    }
    
}

listado();
function listado() {
    
    var pro="lista de productos"
    for (let index = 0; index < objetos.length; index++) {
        
        pro=pro+" <br> "+objetos[index]+".....$"+precios[index];
        document.getElementById("pro").innerHTML=pro;
        
        
        
    }

}
var getNew=function() {
    let productonuevo = document.getElementById("Productonuevo").value;
    let precionuevo = document.getElementById("nuevoprecio").value;
    alert("el nuevo producto es: \r" +productonuevo+"\r Tiene un precio de: \r"+precionuevo);
    objetos.push(productonuevo);
    precios.push(precionuevo);
    var pro="lista de productos"
    for (let index = 0; index < objetos.length; index++) {
        
        pro=pro+" <br> "+objetos[index]+".....$"+precios[index];
        document.getElementById("pro").innerHTML=pro;
    }

}
    

var costo;
var getData=function (){
    
  let datos = document.getElementById("produc").value;
  let dato = document.getElementById("cant").value;

  let datos1 = document.getElementById("produc1").value;
  let dato1 = document.getElementById("cant1").value;

  let datos2 = document.getElementById("produc2").value;
  let dato2 = document.getElementById("cant2").value;

  let datos3 = document.getElementById("produc3").value;
  let dato3 = document.getElementById("cant3").value;

  let datos4 = document.getElementById("produc4").value;
  let dato4 = document.getElementById("cant4").value;

  let datos5 = document.getElementById("produc5").value;
  let dato5 = document.getElementById("cant5").value;

  let datos6 = document.getElementById("produc6").value;
  let dato6 = document.getElementById("cant6").value;

  let datos7 = document.getElementById("produc7").value;
  let dato7 = document.getElementById("cant7").value;

  let datos8 = document.getElementById("produc8").value;
  let dato8 = document.getElementById("cant8").value;

  let datos9 = document.getElementById("produc9").value;
  let dato9 = document.getElementById("cant9").value;
  
    
    var total=0;

    document.getElementById("pago").innerHTML="producto escogido: <br>"+objetos[datos]+"\r que tiene un precio de: $"+precios[datos]+"<br>"+"Cantidad adquirida: "+dato;
    costo= Number(precios[datos])*Number(dato);
    document.getElementById("costo").innerHTML="Costo: $"+ costo+ "<br>";
    total=total+costo;
    
    
    document.getElementById("pago1").innerHTML="producto escogido: <br>"+objetos[datos1]+"\r que tiene un precio de: $"+precios[datos1]+"<br>"+"Cantidad adquirida: "+dato1;
    costo= Number(precios[datos1])*Number(dato1);
    document.getElementById("costo1").innerHTML="Costo: $"+ costo+ "<br>";
    total=total+costo;


    document.getElementById("pago2").innerHTML="producto escogido: <br>"+objetos[datos2]+"\r que tiene un precio de: $"+precios[datos2]+"<br>"+"Cantidad adquirida: "+dato2;
    costo= Number(precios[datos2])*Number(dato2);
    document.getElementById("costo2").innerHTML="Costo: $"+ costo+ "<br>";
    total=total+costo;

    document.getElementById("pago3").innerHTML="producto escogido: <br>"+objetos[datos3]+"\r que tiene un precio de: $"+precios[datos3]+"<br>"+"Cantidad adquirida: "+dato3;
    costo= Number(precios[datos3])*Number(dato3);
    document.getElementById("costo3").innerHTML="Costo: $"+ costo+ "<br>";
    total=total+costo;

    document.getElementById("pago4").innerHTML="producto escogido: <br>"+objetos[datos4]+"\r que tiene un precio de: $"+precios[datos4]+"<br>"+"Cantidad adquirida: "+dato4;
    costo= Number(precios[datos4])*Number(dato4);
    document.getElementById("costo4").innerHTML="Costo: $"+ costo+ "<br>";
    total=total+costo;

    document.getElementById("pago5").innerHTML="producto escogido: <br>"+objetos[datos5]+"\r que tiene un precio de: $"+precios[datos5]+"<br>"+"Cantidad adquirida: "+dato5;
    costo= Number(precios[datos5])*Number(dato5);
    document.getElementById("costo5").innerHTML="Costo: $"+ costo+ "<br>";
    total=total+costo;

    document.getElementById("pago6").innerHTML="producto escogido: <br>"+objetos[datos6]+"\r que tiene un precio de: $"+precios[datos6]+"<br>"+"Cantidad adquirida: "+dato6;
    costo= Number(precios[datos6])*Number(dato6);
    document.getElementById("costo6").innerHTML="Costo: $"+ costo+ "<br>";
    total=total+costo;

    document.getElementById("pago7").innerHTML="producto escogido: <br>"+objetos[datos7]+"\r que tiene un precio de: $"+precios[datos7]+"<br>"+"Cantidad adquirida: "+dato7;
    costo= Number(precios[datos7])*Number(dato7);
    document.getElementById("costo7").innerHTML="Costo: $"+ costo+ "<br>";
    total=total+costo;

    document.getElementById("pago8").innerHTML="producto escogido: <br>"+objetos[datos8]+"\r que tiene un precio de: $"+precios[datos8]+"<br>"+"Cantidad adquirida: "+dato8;
    costo= Number(precios[datos8])*Number(dato8);
    document.getElementById("costo8").innerHTML="Costo: $"+ costo+ "<br>";
    total=total+costo;

    document.getElementById("pago9").innerHTML="producto escogido: <br>"+objetos[datos9]+"\r que tiene un precio de: $"+precios[datos9]+"<br>"+"Cantidad adquirida: "+dato9;
    costo= Number(precios[datos9])*Number(dato9);
    document.getElementById("costo9").innerHTML="Costo: $"+ costo+ "<br>";

    
    total=total+costo;
    document.getElementById("total").innerHTML="Total: $"+ total+ "<br>";


}
