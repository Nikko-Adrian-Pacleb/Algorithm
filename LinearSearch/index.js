const Render = require('./Classes/Render.js')

const svg = d3.select('#svg')
const render = new Render(svg)

render.renderRectArray(10)