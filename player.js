alert("Inicia el juego")
alert("Elige una Opcion")

let player = prompt("Escribe 1 para Piedra,2 Papel, 3 Tijera")

if (player == 1){
    alert("Elegiste Piedra")
}else if (player == 2){
    alert("Elegiste Papel")
}else if(player ==2){
    alert("Elegiste tijera")
}

let maquina = Math.round(Math.random()* 2)

if (maquina == 1){
    alert("La Maquina Escogio Piedra")
}else if(maquina == 2){
    alert("La Maquina Escogio Papel")
}else if (maquina == 3){
    alert("La Maquina Escogio Tijera")
}

if (player == maquina){
    alert("Empate!!!")
}else if (player == 1 && maquina ==3){
    alert(" Exelente Ganaste !!")
}else if (player == 2 && maquina ==1){
    alert(" Exelente Ganaste !!")
}else if (player == 3 && maquina ==2){
    alert(" Exelente Ganaste !!")
}else{
    alert("Perdiste :(")
}
