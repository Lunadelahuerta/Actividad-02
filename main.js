var nombre = prompt("Hola, ¿como te llamas?")
var edad = prompt("¿Cuántos años tienes?")
var sueño = prompt("¿Qué edad te gustaría tener en realidad?")

var faltan = Number(sueño) - Number(edad)
var dream = Number(edad) - Number(sueño)

if (edad < sueño){
  alert("Naaa, te faltan " + faltan + " años!")
}
else{
  alert("Hahaha, tendrías que rejuvenecer " + dream + " años!")
}


