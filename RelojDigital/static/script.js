window.onload = function () {
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDegree = (seconds / 60) * 360 + 90; // 90 es para corregir el offset inicial
        const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
        const hoursDegree = (hours % 12) / 12 * 360 + (minutes / 60) * 30 + 90;

        secondHand.style.transform = `rotate(${secondsDegree}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
        hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    }

    function updateDate() {
        const dateElement = document.getElementById('current-date');
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
    
        const now = new Date();
        const dayName = daysOfWeek[now.getDay()];
        const day = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();
    
        dateElement.textContent = `${dayName}, ${day} de ${month} de ${year}`;
    }
    setInterval(updateClock, 1000);
    updateClock();
    updateDate();
};

