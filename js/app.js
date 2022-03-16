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
        const textHour = Math.floor(gap % day / hour);
        const textMinute = Math.floor(gap % hour / minute);
        const textSecond = Math.floor(gap % minute / second);

        // Updating our HTML :

        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSecond;
    };
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
        const textHour = Math.floor(gap % day / hour);
        const textMinute = Math.floor(gap % hour / minute);
        const textSecond = Math.floor(gap % minute / second);

        if (textDay == 0 && textHour == 0 && textMinute == 0 && textSecond == 0) {
            document.location.href = "happybirthday.html";
            clearTimeout(countdown);
        }
    };
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
            aEle[i].style.transform = "rotateY(" + i * (360 / aEle.length) + "deg) translateZ(" + radius + "px)";
            aEle[i].style.transition = "transform 1s";
            aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
        }
    }

    function applyTransform(obj) {
        if (tY > 180) tY = 180;
        if (tY < 0) tY = 0;

        obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }

    function playSpin(yes) {
        ospin.style.animationPlayState = yes ? 'running' : 'paused';
    }

    var sX,
        sY,
        nX,
        nY,
        desX = 0,
        desY = 0,
        tX = 0,
        tY = 10;

    if (autoRotate) {
        var animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
        ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    document.onpointerdown = function (e) {
        clearInterval(odrag.timer);
        e = e || window.event;
        var sX = e.clientX,
            sY = e.clientY;

        this.onpointermove = function (e) {
            e = e || window.event;
            var nX = e.clientX,
                nY = e.clientY;

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

    /* Audio */

    // const ctx = new (window.AudioContext || window.webkitAudioContext)();

    // const osc = ctx.createOscillator();

    // osc.connect(ctx.destination);

    // console.log(ctx);
    // ctx.state.textContent = "ranning";
    // console.log(ctx.state);


    /* Button Audio */

    // const btn = document.querySelector('#btn');

    // const img = document.getElementById('img');

    // btn.addEventListener('click', () => {
    // img.classList.toggle('show');
    // alert(" L'image va apparaitre ");
    // })

    // let mus = document.getElementById('Music');
    // let taff = document.getElementById('taff');

    // mus.addEventListener('click', musicPlay);
    // function musicPlay() {


    // }

    // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // audioCtx.onstatechange = function() {
    //     console.log(audioCtx.state);
    // };

    /* OnState Changes */
    // const musicPlay =()=> {
    //     console.log("btn clicked");
    //     window.AudioContext = window.AudioContext || window.webkitAudioContext;
    //     audioContext = new window.AudioContext();
    //     audioContext.resume();
    //     audioContext.onstatechange = () => console.log(audioContext.state);
    //     console.log(audioContext); // Suspended
    // }

    // let mus = document.getElementById('Music');
    // let taff = document.getElementById('taff');

    // mus.addEventListener('click', musicPlay);


    // function musicPlay() {
    //         console.log("btn clicked");
    //         window.AudioContext = window.AudioContext || window.webkitAudioContext;
    //         audioContext = new AudioContext();
    //         audioContext.resume();
    //         audioContext.onstatechange = () => console.log(audioContext.state);
    //         console.log(audioContext); // Suspended
    //         setInterval();
    //     }


    // let mus = document.getElementById('Music');

    // mus.addEventListener('click', musicPlay);

    // function musicPlay() {
    //     var music = new Audio("https://www.youtube.com/watch?v=l_Q-SySBYfk");
    //     music.load();
    //     music.play();
    // }

    // const masou = () => {

    //     let mus = document.getElementById('Music');

    //     mus.setAttribute("src", "./asset/Happy.mp3");
    //     setInterval(masou, 1000);
    // };
    // masou();


    // let mus = document.getElementById('Music');

    // mus.addEventListener('click', ()=>{
    //         play();
    // });


    const masou = () => {

        let mus = document.getElementById('Music');

        mus.play();
        setInterval(masou, 100);
    };
    masou();
});