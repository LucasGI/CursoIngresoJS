function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var maximo=10
	var minimo=1
	nota = Math.floor(Math.random() * ((maximo + 1)- minimo)+minimo);
	if (nota>=9){
		alert (nota + " EXCELENTE");
	}
else if (nota<4){
	alert(nota + " vamos la proxima se puede");
}
else{
	alert(nota +" aprobo");
}
}//FIN DE LA FUNCIÓN