
function mostrar()
{
	alert("uno");
	var tipo;
	var precio;
	var cant;
	var marca;
	var fabricante;
	var seguir=0;
	var barbijoCaro;
	var cantBarbijo;
	var fabricanteCaro;
	var flag;
	var flag2;
	var contadorJabon=0;
	var cantitemMas;
	var itemMas;

while(seguir<5){
seguir++;
tipo=prompt("ingrese el tipo de producto: ");
while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol"){
	tipo=prompt("tipo de producto invalido, ingrese un producto correcto: ");
}

precio=parseInt(prompt("ingrese el precio: "));
while(isNaN(cant) || precio<100 || precio>300){
	precio=parseInt(prompt("valor invalido, ingrese un precio correcto: "));
}
cant=parseInt(prompt("ingrese la cantidad: "));
while(isNaN(cant) || cant<=0 || cant>1000 ){
	cant=parseInt(prompt("valor invalido, ingrese una cantidad correcta: "));
}

marca=prompt("ingrese la marca: ");
fabricante=prompt("ingrese el fabricante: ");


if(flag==0 || tipo=="Barbijos" && precio>barbijoCaro){
barbijoCaro=precio;
cantBarbijo=cant;
fabricanteCaro=fabricante;
flag=1;
}

else if(tipo=="jabon"){
contadorJabon=contadorJabon+cant;
}

if(flag2==0 || cant>cantitemMas){
	cantitemMas=cant;
	itemMas=fabricante;
	flag=1
}



}


document.write("del mas caro de los barbijos la cantidad fue " + cantBarbijo + "y el fabricante fue " + fabricanteCaro + "</br>" );
document.write("del item con mas unidades el fabricante fue " + itemMas + "</br>");
document.write("la cantidad total de jabones fue de " + contadorJabon + "unidades" + "</br>");









}
