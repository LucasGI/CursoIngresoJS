function mostrar()
{
  alert("dos");
  var peso;
  var precio;
  var validad;
  var contadorkg=0;
  var porcdescuento;
  var descuento;
  var preciocondescuento;
  var preciosindescuento=0;

do{
  peso=parseInt(prompt("ingrese el peso: "));
  while(isNan(peso) || peso<10 || peso>1000){
  peso=parseInt(prompt("peso invalido, ingrese un valor correcto: "));
  }

  precio=parseInt(prompt("ingrese el precio por kg: "));
  while(peso<=0){
    precio=parseInt(prompt("precio invalido, ingrese un valor correcto: "));
  }

  validad=prompt("ingrese el tipo de validad: ");
  while(validad!='v' && validad!='a' && validad!='m'){
    validad=prompt("tipo invalido, ingrese un valor correcto: ");
  }

contadorkg=contadorkg+peso;
preciosindescuento=preciosindescuento+precio;


  seguir=prompt("desea continuar? ");
}while(seguir=='s')


if(contadorkg>=100 && contadorkg<300){
porcdescuento=15
}

else if(contadorkg>=300){
  porcdescuento=25
}

else{}


descuento=preciosindescuento*porcdescuento/100;
preciocondescuento=preciosindescuento-descuento;







}
 
document.write("el precio bruto es de " + preciosindescuento + "</br>");
document.write("")