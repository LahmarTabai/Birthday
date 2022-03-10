document.addEventListener("DOMContentLoaded", () => {
    const countdown = () => {
        // const countDate = new Date("apr 27, 2022 00:00:00").getTime(); // la date du mem jour 

        const countDate = new Date("March 11, 2022 00:38:00").getTime(); // la date du mem jour 

        
        
        const now = new Date().getTime();
        const gap = countDate - now;

        
        // How does time works ?

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Calcul 

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        
        // Updating our HTML :

        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSecond;

        
    }
    countdown();

    const reload = () => {

        const countDate = new Date("March 11, 2022 00:38:00").getTime(); // la date du mem jour 
        
        
        
        const now = new Date().getTime();
        const gap = countDate - now;

        // How does time works ?

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Calcul 

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);


        if ((textDay == 0) && (textHour == 0) && (textMinute == 0) && (textSecond == 0)) {
            document.location.href = "happybirthday.html";
            clearTimeout(countdown);
        }
        

        
    }
    reload();
   

    
    // pour recharger la page chaque seconde :

    setInterval(countdown, 1000);
    setInterval(reload, 1000);
    // setTimeout()
});