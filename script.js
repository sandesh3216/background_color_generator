const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color');
const body = document.querySelector('#gradient');
const randomButton = document.querySelector('#random-button');

const setGradient = () => {
    const color1Rgb = getRgbString(color1.value);
    const color2Rgb = getRgbString(color2.value);

    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = `Color 1: ${color1Rgb}, Color 2: ${color2Rgb}`;
}

const getRgbString = (color) => {
    const rgb = hexToRgb(color);
    return `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

const hexToRgb = (hexColor) => {
    const hex = hexColor.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

const getRandomHexColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const randomizeColors = () => {
    color1.value = getRandomHexColor();
    color2.value = getRandomHexColor();
    setGradient();
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomButton.addEventListener('click', randomizeColors);
