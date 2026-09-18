const greenSlider = document.getElementById('green-slider');
const greenHex = document.getElementById('green-hex');
const greenBox = document.getElementById('green-box');

const redSlider = document.getElementById('red-slider');
const redHex = document.getElementById('red-hex');
const redBox = document.getElementById('red-box');

function toHex(value) {
    const hex = parseInt(value).toString(16).toUpperCase();
    return hex.length === 1 ? '0' + hex : hex;
}

function updateGreen() {
    const g = greenSlider.value;
    const hexStr = `#00${toHex(g)}00`; 
    greenHex.textContent = hexStr;
    greenBox.style.backgroundColor = hexStr;
}

function updateRed() {
    const r = redSlider.value;
    const hexStr = `#${toHex(r)}0000`; 
    redHex.textContent = hexStr;
    redBox.style.backgroundColor = hexStr;
}

greenSlider.addEventListener('input', updateGreen);
redSlider.addEventListener('input', updateRed);

// Inicializar colores
updateGreen();
updateRed();