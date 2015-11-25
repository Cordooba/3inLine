var esJugador = true;

var arraySoluciones = ["***000000","*00*00*00","*000*000*","0*00*00*0","00*00*00*","00*0*0*00","000***000","000000***"];

document.write(" <table border='5' width='500' height='500'> ");

document.write(" <thead>Tres en Rayas</thead> ");

document.write(" <tbody> ");

for (var i = 0; i < 3; i++ ) {

    document.write(" <tr> ");

    for (var j = 0; j < 3; j++) {

        document.write(" <td id='casilla"+ i + j +"' onClick='introduceTag(this.id)'></td> ");

    }

    document.write(" </tr> ");

}

document.write(" </tbody> ");

document.write(" </table> ");

function introduceTag ( id ) {

    var color = document.getElementById(id).style.backgroundColor;

    if ( color != "red" && color != "blue") {

        if ( esJugador == true ) {

            document.getElementById(id).style.backgroundColor = "red";
            cambiarTurno();

        }else {

            document.getElementById(id).style.backgroundColor = "blue";
            cambiarTurno();

        }


    }else {

        window.alert("La casilla esta ocupada. \nIntente otra casilla...");
        return;

    }

    comprobarGanador();

}

function comprobarGanador ( ) {

    var contador = 0;

    var win = false;

    var arraySoluciones = ["***000000","*00*00*00","*000*000*","0*00*00*0","00*00*00*","00*0*0*00","000***000","000000***"];

    var comprobacion = "";

        if ( esJugador ) {

            var colorJugador = "blue";

        }else{

            var colorJugador = "red";

        }

        for ( var i = 0 ; i < 3 ; i++ ) {

            for ( var j = 0 ; j < 3 ; j++ ) {

                var element = document.getElementById("casilla"+i+j);

                if ( element.style.backgroundColor == colorJugador ) {

                    comprobacion+="*";

                }else{

                    comprobacion+="0";

                }

            }

        }

        for ( var i = 0 ; i < arraySoluciones.length ; i++ ) {

            var toCheck = arraySoluciones[i];

            if ( toCheck == comprobacion ) {

                win = true;

            }

        }

        if ( win != true ) {

            for ( var i = 0 ; i < arraySoluciones.length ; i++ ) {

                for ( var j = 0 ; j < comprobacion.length ; j++ ) {

                    var toCheck = arraySoluciones [i];

                    if ( toCheck.charAt(j) == '*' && comprobacion.charAt(j) == '*' ) {

                        contador++;

                    }

                    if ( contador == 3 ) {

                        win = true;

                    }

                }

                contador = 0;

            }

        }

        if ( win == true ) {

            alert("El jugador de color "+colorJugador+" es el ganador.");
            window.close();

        }

}

function cambiarTurno ( ) {

    if ( esJugador == true ) {

        esJugador = false;

    }else {

        esJugador = true;

    }

}