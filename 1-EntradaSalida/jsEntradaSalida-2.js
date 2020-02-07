/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //le pido al sistema que cree una variable con ese nombre, variable es un espacio en la memoria del sistema para almacenar datos
    var nombre;
    //le doy un valor a la variable
    nombre = prompt ("ingrese su nombre: ");
    //muestro la alerta con el valor resultante
    alert(nombre);
}

