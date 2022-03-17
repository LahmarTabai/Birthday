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


    // const masou = () => {

    //     let mus = document.getElementById('Music');

    //     mus.play();
    //     setInterval(masou, 100);
    // };
    // masou();


    // var audio = new Audio("./asset/Happy.mp3");

    // audio.oncanplaythrough = function(){
    // audio.play();
    // }

    // audio.loop = true;

    // audio.onended = function(){
    // audio.play();
    // }

    var playBtn = document.getElementById('play');

    var soundSelected = document.getElementById("audio1");

    var playSound = function () {
        soundSelected.play();
    };

    playBtn.addEventListener('click', playSound, false);

    /* cube */

    const btn = document.querySelector('.wrap');
    const cube = document.querySelector('.cube');
    const img = document.querySelectorAll('.manga');

    console.log(img);
    btn.addEventListener('click', () => {
        if (cube.classList == 'cube') {
            cube.classList.add('cube-stop');
            for (let i = 0; i < cube.children.length; i++) {
                cube.children[i].style.opacity = 1;
            }
        } else if (cube.classList == 'cube cube-stop') {
            cube.classList = 'cube';
            for (let i = 0; i < cube.children.length; i++) {
                cube.children[i].style.opacity = 0.8;
            }
        }
    });

    /* touchHandler  */

    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("click", () => {
            if (cube.classList == 'cube') {
                btn.addEventListener("click", () => {
                    cube.classList.add('cube-stop');
                    for (let j = 0; j < cube.children.length; j++) {
                        cube.children[j].style.opacity = 1;
                    }
                });
            } else if (cube.classList == 'cube cube-stop') {
                btn.addEventListener("click", () => {
                    cube.classList = 'cube';
                    for (let k = 0; k < cube.children.length; k++) {
                        cube.children[k].style.opacity = 0.8;
                    }
                });
            }
        });
    }
});