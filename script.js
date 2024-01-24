function zarAt(zarId) {
    var zar = document.getElementById(zarId);
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var rotateValue = Math.floor(Math.random() * 360) + 1;

    zar.style.transform = 'rotate(' + rotateValue + 'deg)';

    setTimeout(function () {
        zar.style.transform = 'rotate(0deg)';
        zar.src = 'zar' + randomNumber + '.png';
    }, 500);
}

function zarlariAt() {
    zarAt('zar1');
    zarAt('zar2');

    
    var zar1 = parseInt(document.getElementById('zar1').src.slice(-5, -4));
    var zar2 = parseInt(document.getElementById('zar2').src.slice(-5, -4));
    var toplam = zar1 + zar2;

    
    document.getElementById('sonuc').textContent = sonucText;
}
