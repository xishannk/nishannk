const canvas = document.getElementById('punkCanvas');
const ctx = canvas.getContext('2d');

window.onload = function() {
    drawCharacter();
};

function drawCharacter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bgUrl = document.getElementById('bgSelect').value;
    const bodyUrl = document.getElementById('bodySelect').value;
    const eyesUrl = document.getElementById('eyesSelect').value;
    const hairUrl = document.getElementById('hairSelect').value;

    const bgImg = new Image();
    bgImg.crossOrigin = "anonymous";
    bgImg.src = bgUrl;
    bgImg.onload = function() {
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

        const bodyImg = new Image();
        bodyImg.crossOrigin = "anonymous";
        bodyImg.src = bodyUrl;
        bodyImg.onload = function() {
            ctx.drawImage(bodyImg, 0, 0, canvas.width, canvas.height);

            if (eyesUrl) {
                const eyesImg = new Image();
                eyesImg.crossOrigin = "anonymous";
                eyesImg.src = eyesUrl;
                eyesImg.onload = function() {
                    ctx.drawImage(eyesImg, 0, 0, canvas.width, canvas.height);
                    loadHair(hairUrl);
                };
            } else {
                loadHair(hairUrl);
            }
        };
    };
}

function loadHair(hairUrl) {
    if (hairUrl) {
        const hairImg = new Image();
        hairImg.crossOrigin = "anonymous";
        hairImg.src = hairUrl;
        hairImg.onload = function() {
            ctx.drawImage(hairImg, 0, 0, canvas.width, canvas.height);
        };
    }
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'my-punk-character.png';
    link.href = canvas.toDataURL();
    link.click();
}
