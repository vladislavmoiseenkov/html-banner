var range = document.getElementById('flying'),
    rangeValue = rangePosition = +range.value,
    imgId = 0,
    newImgId,
    app = document.getElementById('app'),
    wrapper = document.getElementsByClassName('wrapper')[0],
    videoBlock = document.getElementById('video-block'),
    microChip = document.getElementById('micro-chip'),
    flash = document.getElementById('flash'),
    cardFrame = document.getElementById('card-frame'),
    flashHighlightMove = document.getElementById('flash-move'),
    count = 0;

var flashIntervalId, moveFlashHighlightId;

var canvas = document.getElementById('ads'),
    ctx = canvas.getContext('2d');
var phoneImage = new Image(),
    phoneCompanyImage = new Image(),
    phoneModel = new Image(),
    tezis = new Image(),
    buyBTN = new Image(),
    dragInfo = new Image();

if ( imgId < 10 ) {
    newImgId = '0' + imgId;
}

function generateRain() {
    var x = randomNumb(315, 375),
        y = randomNumb(0, 75),
        dropId = randomNumb(1, 4);

    var drop = document.createElement('img');
    drop.setAttribute('src', './images/raindrop_' + dropId + '.png');
    drop.className = 'drop';
    drop.style.position = 'absolute';
    drop.style.zIndex = 12;
    // drop.style.left = x + 'px';
    // drop.style.top = y + 'px';
    drop.style.transform = 'matrix(1, 0, 0, 1,'+ x +',' + y +')';
    app.insertBefore(drop, wrapper);
    drop = document.getElementsByClassName('drop')[0];
    var dropIntervalId = setInterval(function () {
        drop.style.transform = 'matrix(1, 0, 0, 1,'+ x +',' + y +')';
        y++;
        if(y > 270) {
            clearInterval(dropIntervalId);
            drop.style.display = 'none';
        }
    },10);
}

function randomNumb(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function drawContent() {
    buyBTN.src = './images/T_CTA.png';
    buyBTN.onload = function() {
        ctx.drawImage(buyBTN, 875, 180, 100, 35);
    };

    dragInfo.src = './images/T_SliderText.png';
    dragInfo.onload = function () {
        ctx.drawImage(dragInfo, 0, 0, 80, 19, 800, 20, 55, 13);
        ctx.drawImage(dragInfo, 0, 19, 100, 20, 850, 20, 70, 13);
    };

    phoneCompanyImage.onload = function () {
        ctx.drawImage(phoneCompanyImage, 10, 10, 100, 20);
    };
    phoneCompanyImage.src = './images/T_SamsungLogo.png';

    phoneModel.onload = function () {
        ctx.drawImage(phoneModel, 10, 35);
    };
    phoneModel.src = './images/T_GalaxyLogo.png';

    drawPhoneImage(newImgId);
    drawTezis();
}

function drawPhoneImage(id) {
    phoneImage.onload = function(){
        ctx.clearRect(260, 10, 500, canvas.height);
        ctx.drawImage( phoneImage, 250, 10);
    };
    phoneImage.src = './images/phone/phone_000' + id + '.png';
}

function getFlash() {
    var i = 1;

    flash.style.display = 'block';

    flashIntervalId = setInterval(function () {
        flash.style.transform = 'matrix(' + i +', 0, 0,' + i + ', 0, 0)';
        i++;
        if(i === 9) {
            clearInterval(flashIntervalId);
            flashIntervalId = null;
            flash.style.display = 'none';
        }
    }, 35);
}

function moveFlashHighlights() {
    var startPosition = -35;

    moveFlashHighlightId = setInterval(function () {
        flashHighlightMove.style.transform = 'matrix(1,3,1,1,' + startPosition +', -11)';
        startPosition++;

        if(startPosition > 65) {
            clearInterval(moveFlashHighlightId);
            moveFlashHighlightId = null;
        }
    }, 5);

}

function drawTezis(id) {
    if(!arguments.length) {
        id = 1;
    }

    if(id === 1) {
        tezis.src = './images/T_Text'+ id + '.png';
        tezis.onload = function () {
            ctx.clearRect(10, 150, 250, canvas.height);
            ctx.drawImage(tezis, 0, 0, 210, 33, 10, 150, 180, 30);
            ctx.drawImage(tezis, 210, 0, 210, 33, 20, 180, 180, 30);
        };
    } else if(id === 2) {
        tezis.src = './images/T_Text'+ id + '.png';
        tezis.onload = function () {
            ctx.clearRect(10, 150, 250, canvas.height);
            ctx.drawImage(tezis, 0, 0, 150, 33, 10, 150, 150, 30);
            ctx.drawImage(tezis, 150, 0, 190, 33, 15, 180, 190, 30);
            ctx.drawImage(tezis, 340, 0, 220, 33, 20, 210, 220, 30);
        };
    } else if(id === 3) {
        tezis.src = './images/T_Text'+ id + '.png';
        tezis.onload = function () {
            ctx.clearRect(10, 150, 250, canvas.height);
            ctx.drawImage(tezis, 0, 0, 220, 33, 10, 150, 220, 30);
            ctx.drawImage(tezis, 220, 0, 240, 33, 15, 180, 240, 30);
            ctx.drawImage(tezis, 465, 0, 220, 33, 20, 210, 200, 30);
        };
    } else if(id === 4) {
        tezis.src = './images/T_Text'+ id + '.png';
        tezis.onload = function () {
            ctx.clearRect(10, 150, 250, canvas.height);
            ctx.drawImage(tezis, 0, 0, 170, 33, 10, 150, 170, 30);
            ctx.drawImage(tezis, 170, 0, 240, 33, 15, 180, 210, 30);
            ctx.drawImage(tezis, 415, 0, 220, 33, 20, 210, 190, 30);
        };
    }
};

drawContent();
// generateRain();

range.addEventListener('input', function () {
    rangeValue = +range.value;
    imgId = Math.floor(rangeValue / 17);

    if (imgId > 0) {
        videoBlock.style.display = 'none';

    } else {
        videoBlock.style.display = 'block';
    }

    if (imgId === 58) {
        microChip.style.display = 'block';
        cardFrame.style.display = 'block';
        if (!moveFlashHighlightId) {
            moveFlashHighlights();
        }

    } else {
        microChip.style.display = 'none';
        cardFrame.style.display = 'none';
        clearInterval(moveFlashHighlightId);
        moveFlashHighlightId = null;
    }

    if(imgId === 29) {
        if (!flashIntervalId) {
            getFlash();
        }
    }

    if(rangeValue < 55) {
        drawTezis(1);
    } else if(rangeValue > 55 && rangeValue < 355) {
        drawTezis(2);
    } else if(rangeValue > 355 && rangeValue < 825) {
        drawTezis(3);
    } else if(rangeValue> 825) {
        drawTezis(4);
    }

    if ( imgId < 10) {
        newImgId = '0' + imgId;
    } else {
        newImgId = imgId;
    }
    drawPhoneImage(newImgId);
});