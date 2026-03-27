let valid = document.getElementById('valid');

valid.addEventListener("click", Validation);

function Validation() {
    let organeA = document.getElementById('organe-a');
    let organeB = document.getElementById('organe-b');
    let organeC = document.getElementById('organe-c');

    let reponseJuste = 0;
    let reponseFausse = 0;

    if (organeA.value == 'oesophage') {
        reponseJuste = reponseJuste + 1;
    } else {
        reponseFausse = reponseFausse + 1;
    }

    if (organeB.value == 'foie') {
        reponseJuste = reponseJuste + 1;
    } else {
        reponseFausse = reponseFausse + 1;
    }

    if (organeC.value == 'estomac') {
        reponseJuste = reponseJuste + 1;
    } else {
        reponseFausse = reponseFausse + 1;
    }

    let reponse = document.getElementById('reponse');

    if (reponseJuste == 3) {
        reponse.innerHTML = "لقد وجدت <br>كل الإجابات!";
        reponse.style.backgroundColor = "rgba(4, 196, 4, 0.6)";
    }

    if (reponseJuste == 2) {
        reponse.innerHTML = "لقد وجدت <br>إجابتين!";
        reponse.style.backgroundColor = "rgb(253, 166, 5)";
    }

    if (reponseJuste == 1) {
        reponse.innerHTML = "لقد وجدت <br>إجابة واحدة!";
        reponse.style.backgroundColor = "rgb(237, 117, 43)";
    }

    if (reponseJuste == 0) {
        reponse.innerHTML = "لم تجد <br>أي إجابات!!";
        reponse.style.backgroundColor = "rgba(227, 19, 19, 0.844)";
    }
}
