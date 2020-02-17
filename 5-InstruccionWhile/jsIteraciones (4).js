function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
while(numero <0 || numero>9 || isNaN(numero)){
numero=parseInt(prompt("Error, intente nuevamente"));

}
document.getElementById("numero").value=numero;
}//FIN DE LA FUNCIÓN