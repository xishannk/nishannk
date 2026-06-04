const canvas = document.getElementById('punkCanvas');
const ctx = canvas.getContext('2d');

function drawCharacter() {
    const bgSrc = document.getElementById('bgSelect').value;
    const bodySrc = document.getElementById('bodySelect').value;
    const eyesSrc = document.getElementById('eyesSelect').value;
    const hairSrc = document.getElementById('hairSelect').value;

    const images = [bgSrc, bodySrc, eyesSrc, hairSrc];
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    images.forEach(src => {
        if (src) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, 400, 400);
            };
        }
    });
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'my-punk.png';
    link.href = canvas.toDataURL();
    link.click();
}

window.onload = drawCharacter;
