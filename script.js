// Generar un número aleatorio entre 1 y 200
const numeroObjetivo = Math.floor(Math.random() * 200) + 1;

// Función para comprobar si el número adivinado está cerca o lejos
function comprobarNumero(numeroAdivinado) {
    const diferencia = Math.abs(numeroAdivinado - numeroObjetivo);
    
    if (diferencia === 0) {
        return "¡Felicidades! ¡Has adivinado el número!";
    } else if (diferencia <= 10) {
        return "¡Caliente!";
    } else {
        return "¡Frío!";
    }
}

// Función principal del juego
function jugarJuego() {
    let intentos = 0;

    while (true) {
        // Pedir al jugador que adivine un número
        const numeroAdivinadoString = prompt("Adivina un número entre 1 y 200, o pulsa cancelar para salir:");

        // Si el jugador pulsa cancelar, salir del juego
        if (numeroAdivinadoString === null) {
            alert("¡Hasta luego!");
            break;
        }

        const numeroAdivinado = parseInt(numeroAdivinadoString);

        // Si el jugador ingresa un número inválido, pedirle que ingrese otro
        if (isNaN(numeroAdivinado) || numeroAdivinado < 1 || numeroAdivinado > 200) {
            alert("Por favor, ingresa un número válido entre 1 y 200.");
            continue;
        }

        // Incrementar el contador de intentos
        intentos++;

        // Comprobar si el número adivinado es igual al número objetivo
        const respuesta = comprobarNumero(numeroAdivinado);
        alert(respuesta);

        if (respuesta.includes("Felicidades")) {
            alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
            break;
        }
    }
}

// Iniciar el juego al cargar la página
jugarJuego();
