window.onload = function () {
    const pieces = document.getElementsByTagName('svg');
    const names = {
        head: "رأس",
        "left-shoulder": "كتف أيسر",
        "right-shoulder": "كتف أيمن",
        "left-arm": "ذراع أيسر",
        "right-arm": "ذراع أيمن",
        chest: "صدر",
        stomach: "بطن",
        "left-leg": "ساق أيسر",
        "right-leg": "ساق أيمن",
        "left-hand": "يد أيسر",
        "right-hand": "يد أيمن",
        "left-foot": "قدم أيسر",
        "right-foot": "قدم أيمن"
    };

    for (var i = 0; i < pieces.length; i++) {
        let _piece = pieces[i];
        _piece.onclick = function(t) {
            let position = t.target.getAttribute('data-position');
            if (!position) {
                position = t.target.parentElement.getAttribute('data-position');
            }
            document.getElementById('data').innerHTML = names[position] || '';
        }
    }
}
