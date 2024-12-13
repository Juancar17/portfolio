document.addEventListener("DOMContentLoaded", () => {

    const toggleTerminals = document.getElementById('toggleTerminals');
    const terminalDropdown = document.getElementById('terminalDropdown');

    toggleTerminals.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que se recargue la página
        // Alterna la visibilidad del dropdown
        if (terminalDropdown.style.display === "none" || terminalDropdown.style.display === "") {
            terminalDropdown.style.display = "block"; // Muestra el cartel
        } else {
            terminalDropdown.style.display = "none"; // Oculta el cartel
        }
    });

    // Opción adicional para cerrar el dropdown si se hace clic fuera
    document.addEventListener('click', (event) => {
        if (!toggleTerminals.contains(event.target) && !terminalDropdown.contains(event.target)) {
            terminalDropdown.style.display = "none"; // Cierra el cartel si se hace clic fuera de él
        }
    });


    const stepsData = [
        {
            image: 'img/imagen1.jpg',
            title: 'Reserva tu plaza',
            description: 'Es muy sencillo, puedes reservar a través de nuestra web o directamente por teléfono. Podrás reservar online hasta 4 horas antes de tu salida, y por teléfono hasta 20 minutos antes.'
        },
        {
            image: 'img/imagen2.jpg',
            title: 'Recogemos tu coche',
            description: 'Uno de nuestros conductores (uniformado con chaleco morado y logo de Parking Express) recogerá tu vehículo directamente en la zona central de las terminales T1, T2 y T4 de la plataforma de salidas, avisándonos siempre 20 minutos antes de la entrega.'
        },
        {
            image: 'img/imagen3.jpg',
            title: 'Peritación del vehículo',
            description: 'En el momento de la recogida de su vehículo, se le entregará un contrato, en el cual el conductor le apuntarán el estado de su vehículo. Seguidamente el cliente firmara dicho contrato, como que está de acuerdo con la peritacion.'
        },
        {
            image: 'img/imagen4.jpg',
            title: 'Durante tu viaje',
            description: 'Disfruta de tu viaje mientras nosotros mantenemos tu coche seguro.'
        },
        {
            image: 'img/imagen5.jpg',
            title: 'Te lo devolvemos',
            description: 'Cuando hayas aterrizado sólo necesitamos que nos llames y en 20 minutos aproximadamente te estaremos esperando con tu vehículo en la zona central de las terminales T1, T2 y T4 de la plataforma de salidas.'
        }
    ];

    // Selección de los elementos
    const imageContainer = document.querySelector('.image-container img');
    const steps = document.querySelectorAll('.step');
    let currentStep = 0; // Variable para llevar el seguimiento del paso actual

    // Función que actualiza el contenido de acuerdo con el paso actual


    function actiualizarFotos(index) {
        let imagen= stepsData[index].image;
        let  title = stepsData[index].title;
        let description = stepsData[index].description;

        steps.forEach(s => {
            s.classList.remove('active');
            let parrafos = s.querySelector("p")
            if(parrafos){
                parrafos.classList.remove('visible')
            }
        });

        steps[index].classList.add("active")
        imageContainer.src = imagen

        let titulo = steps[index].querySelector("h3")
        let parrafo = steps[index].querySelector("p")
        
        titulo.textContent = title
        parrafo.textContent = description
        parrafo.classList.add("visible")
    }
    
    
    let intervaloIniciado = false
    let intervalId

    function pausarIntervalo() {
        if(intervaloIniciado){
            clearInterval(intervalId)
        }
    }
    
    function iniciarIntervalo() {
        if(!intervaloIniciado) {
            intervalId = setInterval(() => {
                currentStep = (currentStep + 1) % steps.length;
                actiualizarFotos(currentStep);
            }, 2000); // Cambia cada 2 segundos
            intervaloIniciado = true
        }
    }

    

    // Función de auto-play con setInterval
    window.addEventListener("scroll", function() {
        // Verificar si la sección es visible y que el intervalo aún no ha empezado
            actiualizarFotos(currentStep); // Mostrar la primera foto al entrar en la sección
            iniciarIntervalo(); // Iniciar el setInterval una vez
    });

    steps.addEventListener("click", pausarIntervalo)
});




function calcularPrecio() {
    let fechaEntrega = new Date(document.getElementById('fecha-entrega').value);
    let fechaRecogida = new Date(document.getElementById('fecha-recogida').value);
    let cobertura = document.getElementById('cobertura').value; // Obtener el valor de la cobertura

    // Validar las fechas
    if (isNaN(fechaEntrega.getTime()) || isNaN(fechaRecogida.getTime())) {
        alert("Por favor, introduce ambas fechas.");
        return;
    }

    let diferenciaTiempo = fechaRecogida.getTime() - fechaEntrega.getTime();
    let diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));

    if (diferenciaDias <= 0) {
        alert("La fecha de recogida debe ser posterior a la fecha de entrega.");
        return;
    }

    let precioTotal = 18; // Precio del primer día
    if (diferenciaDias > 1) {
        precioTotal += (diferenciaDias - 1) * 5; // Precio de los días adicionales
    }

    // Si el estacionamiento es cubierto, agregar 5€
    if (cobertura === 'si') {
        precioTotal += 5;
    }

    // Mostrar los detalles del resumen
    document.getElementById('dias-reserva').textContent = `Reserva de ${diferenciaDias} día(s)`;
    document.getElementById('precio-total').innerHTML = `Precio total: <strong>€${precioTotal}</strong> (IVA incluido)`;

    // Hacer visible el contenedor de resumen
    document.getElementById('resumen-calculo').style.display = 'block';

    // Hacer scroll automático hacia el contenedor de resumen
    document.getElementById('resumen-calculo').scrollIntoView({ behavior: 'smooth' });

    
}

document.querySelector('.open-chat').addEventListener('click', () =>{
    document.getElementById('chatbox').style.display = 'flex';
    document.querySelector('.open-chat').style.display = 'none';

});

document.getElementById("openChat").addEventListener("click",  () =>{
    document.getElementById('chatbox').style.display = 'flex';
    document.querySelector('.open-chat').style.display = 'none';

});


document.getElementById('closeChat').addEventListener('click', () => {
    document.getElementById('chatbox').style.display = 'none';
    document.querySelector('.open-chat').style.display = 'flex';

});

    document.getElementById('sendMessage').addEventListener('click', function() {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();
        
        if (message !== '') {
            // Mostrar mensaje del usuario
            const userMessageElement = document.createElement('div');
            userMessageElement.classList.add('user-message');
            userMessageElement.textContent = message;
            document.getElementById('messages').appendChild(userMessageElement);

            // Limpiar el campo de texto
            messageInput.value = '';

            // Respuesta automática del bot
            const botResponse = getBotResponse(message);
            const botMessageElement = document.createElement('div');
            botMessageElement.classList.add('bot-message');
            botMessageElement.textContent = botResponse;
            document.getElementById('messages').appendChild(botMessageElement);

            // Hacer scroll hacia abajo para ver el nuevo mensaje
            document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
        }
    });

// Función para generar respuestas automáticas
function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes('horarios')) {
        return 'Nuestro horario de atención es de lunes a viernes, de 9:00 a 18:00.';
    } else if (message.includes('ubicación')) {
        return 'Nos encontramos en la calle Ejemplo, 123, Madrid.';
    } else if (message.includes('precio')) {
        return 'Nuestros precios varían según el servicio. Por favor, visita nuestra página de precios para más detalles.';
    } else {
        return 'Lo siento, no entiendo tu pregunta. Por favor, contacta a un agente en horario de atención.';
    }
}












    


