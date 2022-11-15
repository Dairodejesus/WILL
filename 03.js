/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
  var objeto = {};
  //for (var i = 0; i<amigos.length; i++){
   // console.log(amigos[i].nombre)
    //if (nombre === amigos[i].nombre){
     // objeto = amigos[i];
    //}
  //}

  // Tu código aca:()
  for (let e in amigos){
    if (nombre=== amigos[e].nombre){
      objeto = amigos[e]
    }
  }
  return objeto
}

//var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }]
//console.log(buscarAmigo(amigos,"toni"))

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo