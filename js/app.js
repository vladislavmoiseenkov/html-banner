var range = document.getElementById('flying'),
    rangeValue = rangePosition = +range.value,
    imgId = 0,
    newImgId;

if ( imgId < 10 ) {
    newImgId = '0' + imgId;
}

var canvas = document.getElementById('ads'),
    ctx = canvas.getContext('2d');
var phoneImage = new Image(),
    phoneCompanyImage = new Image(),
    phoneModel = new Image(),
    tezis = new Image(),
    buyBTN = new Image(),
    dragInfo = new Image();

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

function drawPhoneImage(id) {
    phoneImage.onload = function(){
        ctx.clearRect(260, 10, 500, canvas.height);
        ctx.drawImage( phoneImage, 250, 10);
    };
    phoneImage.src = './images/phone/phone_000' + id + '.png';
}

function drawTezis(id) {
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
}

drawPhoneImage(newImgId);
drawTezis(1);

range.addEventListener('input', function () {
    rangeValue = +range.value;
    imgId = Math.floor(rangeValue / 17);

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