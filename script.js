// Universal Match Engine - Basic Logic
document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
        const layerName = item.querySelector('span').innerText;
        console.log(layerName + " clicked!");
    });
});
