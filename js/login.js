window.addEventListener("load", init);

function init() {
    nome = document.querySelector("#utente");
    pass = document.querySelector("#passw");
    errore = document.querySelector("#spazioerror");
    btn = document.querySelector("#bottone");
    eventHandlers();
}

function eventHandlers() {
    btn.addEventListener("click", entra);
    progressBar();
}

//COUNTDOWN
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);

//CHECK DI DATI LOGIN
function entra() {
    if (nome.value != "" && pass.value != "") {
        benvenuto();
    } else if (nome.value != "" && pass.value == "") {
        errore.innerText = "Inserire password";
    } else if (nome.value == "" && pass.value != "") {
        errore.innerText = "Inserire nome utente";
    } else {
        errore.innerText = "Inserire nome utente e password";
    }
}

//SE DATI LOGIN OK, CARICA LA PAGINA INTERMEDIA
function benvenuto() {
    $('#contenitoremain').css('display', 'none');
    $('#seconda-parte').css('display', 'block');
    $('h2').text(`Ciao ${nome.value}, la tua area personale viene caricata`);
    //var heading2 = $('h2').text;
    //if (heading2 != '') {
    //$('h2').append('<section class="slide-progress-bar">' + '<div class="progress-bar" id="progress-bar"></div>' + '</section>');
    progressBar2();
    //}
}

//  PROGRESS BARS
var elem = document.getElementById("progress-bar");
var width = 1;
var id = {};

function progressBar() {
    id = setInterval(frame, 200);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}


var elem2 = document.getElementById("progress-bar2");
var width2 = 1;
var id2 = {};

function progressBar2() {
    id2 = setInterval(frame, 200);

    function frame() {
        if (width2 >= 100) {
            clearInterval(id2);
            window.location.replace("./index.html");
        } else {
            width2++;
            elem2.style.width = width2 + "%";
        }
    }
}




