function mostrar()
{
//tomo la edad  
var edad;
edad=parseInt(document.getElementById("edad").value);


if(edad<=13 || edad>=17) {
    alert("la persona no es adolecente")
}

}
