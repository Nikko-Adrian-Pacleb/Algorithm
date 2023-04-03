const width = 900;
const height = 600;

const svg = d3.select("#svg");

// Create pixel elements with 10 height and 10 width
let cursorX = 0;
let cursorY = 0;
while (cursorX < width && cursorY < height) {
  new CreatePixel(cursorX, cursorY);
  cursorX += 10;
  if (cursorX == width) {
    cursorY += 10;
    cursorX = 0;
  }
}

// Checks if the mouse is on hold
let mouseDown = false;
window.onmousedown = () => {
  mouseDown = true;
};
window.onmouseup = () => {
  mouseDown = false;
};
