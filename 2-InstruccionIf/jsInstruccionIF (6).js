function mostrar()
{
//tomo la edad  
var edad;
edad=parseInt(document.getElementById("edad").value);

if(edad>=18) {
    alert("la persona es mayor de edad");
}
else if(edad>=13 && edad<=17) {
    alert("la persona es adolecente");
}
else  
    alert("la persona es menor de edad");

}//FIN DE LA FUNCIÓN