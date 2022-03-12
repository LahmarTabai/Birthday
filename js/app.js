document.addEventListener("DOMContentLoaded", () => {
    const countdown = () => {
        const countDate = new Date("apr 27, 2022 00:00:00").getTime(); // la date du mem jour 
        
        
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

        const countDate = new Date("apr 27, 2022 00:00:00").getTime(); // la date du mem jour 
        
        
        
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


    /* Cube ma7loul  */

    var radius = 340;
    var autoRotate = true;
    var rotateSpeed = -60;
    var imgWidth = 190;
    var imgHeight = 230;

    setTimeout(init, 1000);

    var odrag = document.getElementById('drag');
    var ospin = document.getElementById('spin');
    var aImg = ospin.getElementsByTagName('img');

    var aEle = [...aImg];

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    var ground = document.getElementById('ground');
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
        for (let i = 0; i < aEle.length; i++) {
            aEle[i].style.transform = "rotateY(" + (i* (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
            aEle[i].style.transition = "transform 1s";
            aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
        }
    }

    function applyTransform(obj) {
        if (tY > 180) tY = 180;
        if (tY < 0) tY = 0;

        obj.style.transform = "rotateX("+(-tY) + "deg) rotateY(" + (tX) + "deg)";
    }

    function playSpin(yes) {
        ospin.style.animationPlayState = (yes ? 'running' : 'paused');
    }

    var sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;

    if (autoRotate) {
        var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
        ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    document.onpointerdown = function (e) {
        clearInterval(odrag.timer);
        e = e || window.event;
        var sX = e.clientX, sY = e.clientY;
    

    this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX, nY = e.clientY;

        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;

        applyTransform(odrag);

        sX = nX;
        sY = nY;

    };

    this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;

            applyTransform(odrag);

            playSpin(false);

            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                clearInterval(odrag.timer);
                playSpin(true);
            }
        }, 17);
        this.onpointermove = this.onpointerup = null;
    };
    return false;
    };


});