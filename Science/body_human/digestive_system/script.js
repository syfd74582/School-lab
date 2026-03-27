let backgroundImg = document.getElementById('image');
let bouche = document.getElementById('bouche');
let oesophage = document.getElementById('oesophage');
let estomac = document.getElementById('estomac');
let foie = document.getElementById('foie');
let intestingrele = document.getElementById('intestingrele');
let grosintestin = document.getElementById('grosintestin');
let img_organes = document.getElementById('img_organes');
let transform = document.getElementById('transform');


bouche.addEventListener("click", showDescriptionBouche);
oesophage.addEventListener("click", showDescriptionoesophage);
estomac.addEventListener("click", showDescriptionestomac);
foie.addEventListener("click", showDescriptionfoie);
intestingrele.addEventListener("click", showDescriptionintestingrele);
grosintestin.addEventListener("click", showDescriptiongrosintestin);



function initial() {
    img_organes.style.backgroundImage = "url('./assets/images/appdiges.svg')";

    let organe = document.getElementById('organe');
    organe.innerHTML = "الجهاز الهضمي";

    let description = document.getElementById('description');
    description.innerHTML = "الجهاز الهضمي هو نظام الأعضاء الذي يستقبل الطعام، ويهضمه لاستخراج الطاقة والمواد المغذية، ويتخلص من الفضلات المتبقية. يشمل الفم، الغدد اللعابية، المريء، المعدة، البنكرياس، الكبد، المرارة، الأمعاء الدقيقة، الأمعاء الغليظة والمستقيم. بعد مضغ الطعام وابتلاعه، تقوم العصارات الهضمية التي يفرزها البنكرياس والمعدة بتحليله إلى مواد يمكن امتصاصها بسهولة عن طريق الأمعاء الدقيقة. العناصر التي لا يمتصها الجسم تمر إلى الأمعاء الغليظة، وتشكل البراز الذي يتم طرده لاحقًا عبر فتحة الشرج.";
}



function showDescriptionBouche() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (bouche.innerHTML == '-') {
            bouche.innerHTML = '+';
            bouche.style.backgroundColor = "rgb(146, 216, 143)";
            initial();
        } else {
            bouche.innerHTML = '-';
            bouche.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = 'البلعوم';

            img_organes.style.backgroundImage = "url('./assets/images/pharynx2.png')";

            let description = document.getElementById('description');
            description.innerHTML = "في الفم، تقوم الأسنان الأمامية بتقطيع الطعام، بينما تطحنه الأسنان الأخرى بمساعدة اللسان والخدود. يتم سحق الطعام وخلطه باللعاب الذي يلينه ويبدأ هضمه.<br>البلعوم هو ممر يوجد في الرأس والعنق وهو جزء من الجهازين الهضمي والتنفسي. يساعد في نقل الطعام من الفم إلى المريء.";
        }
        transform.classList.remove('circle');
    }, 1000);
}


function showDescriptionoesophage() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (oesophage.innerHTML == '-') {
            oesophage.innerHTML = '+';
            oesophage.style.backgroundColor = "rgb(146, 216, 143)";
            initial();
        } else {
            oesophage.innerHTML = '-';
            oesophage.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = "المريء";

            img_organes.style.backgroundImage = "url('./assets/images/oesophage3.svg')";

            let description = document.getElementById('description');
            description.innerHTML = "هو أنبوب عضلي يربط الفم بالمعدة. تقوم جدرانه بدفع الطعام نحو المعدة بفضل الحركات الإيقاعية الناتجة عن تقلص العضلات.";
        }
        transform.classList.remove('circle');
    }, 1000);
}


function showDescriptionestomac() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (estomac.innerHTML == '-') {
            estomac.innerHTML = '+';
            estomac.style.backgroundColor = "rgb(146, 216, 143)";
            initial();
        } else {
            estomac.innerHTML = '-';
            estomac.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = "المعدة";

            img_organes.style.backgroundImage = "url('./assets/images/estomac3.svg')";

            let description = document.getElementById('description');
            description.innerHTML = "في المعدة، يتحول الطعام إلى خليط متجانس بفضل التحريك الشديد. تسهل هذه الحركات (الحركات التمعجية) عمل العصارة المعدية التي تحتوي على حمض الهيدروكلوريك وإنزيمين، البيبسين والمخثر، واللذين يساهمان في تكسير البروتينات.";
        }
        transform.classList.remove('circle');
    }, 1000);
}


function showDescriptionfoie() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (foie.innerHTML == '-') {
            foie.innerHTML = '+';
            foie.style.backgroundColor = "rgb(146, 216, 143)";
            initial();
        } else {
            foie.innerHTML = '-';
            foie.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = 'الكبد والبنكرياس';

            img_organes.style.backgroundImage = "url('./assets/images/foie3.svg')";

            let description = document.getElementById('description');
            description.innerHTML = "يقوم الكبد بهضم الطعام من خلال إنتاج العصارة الصفراوية (المخزنة في المرارة) لتفكيك الدهون، وإزالة السموم، واستخلاص وتخزين بعض الفيتامينات والمعادن. أما البنكرياس فينتج إنزيمات تساعد في تحليل البروتينات والدهون والكربوهيدرات.";
        }
        transform.classList.remove('circle');
    }, 1000);
}


function showDescriptionintestingrele() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (intestingrele.innerHTML == '-') {
            intestingrele.innerHTML = '+';
            intestingrele.style.backgroundColor = "rgb(146, 216, 143)";
            initial();
        } else {
            intestingrele.innerHTML = '-';
            intestingrele.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = "الأمعاء الدقيقة";

            img_organes.style.backgroundImage = "url('./assets/images/intestingrele2.png')";

            let description = document.getElementById('description');
            description.innerHTML = "تُعرف أيضًا باسم الأمعاء الصغيرة، وهي عضو أنبوبي مجوف يقع بين المعدة والأمعاء الغليظة. تتمثل الوظائف الأساسية للأمعاء الدقيقة في تحليل (هضم) الطعام وامتصاص العناصر الغذائية مثل الإلكتروليتات والفيتامينات والمعادن.";
        }
        transform.classList.remove('circle');
    }, 1000);
}


function showDescriptiongrosintestin() {
    transform.classList.add('circle');
    setTimeout(function () {
        if (grosintestin.innerHTML == '-') {
            grosintestin.innerHTML = '+';
            grosintestin.style.backgroundColor = "rgb(146, 216, 143)";
            initial();
        } else {
            grosintestin.innerHTML = '-';
            grosintestin.style.backgroundColor = "#97d6f3";

            let organe = document.getElementById('organe');
            organe.innerHTML = "الأمعاء الغليظة";

            img_organes.style.backgroundImage = "url('./assets/images/grosintestin3.svg')";

            let description = document.getElementById('description');
            description.innerHTML = "تمتص الأمعاء الغليظة أو القولون الماء المرتبط بالفضلات لتكوين براز شبه صلب. ينتقل البراز بعد ذلك إلى المستقيم قبل أن يتم طرده عبر فتحة الشرج.";
        }
        transform.classList.remove('circle');
    }, 1000);
}