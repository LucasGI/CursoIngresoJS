/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //asigno un espacio a la variable
    var nombre;
    //le asigno a la cariable el valor del doc html
    nombre=document.getElementById("elNombre").value;
    alert (nombre);
}


