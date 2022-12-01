// SVG Setup
const svg = d3.select('#vis-svg-linear')
const Vis = new RectVis(svg)
function reset() {
    Vis.ClearSVG()
    Vis.CreateRect()
    // Vis.SetupRect()
}

reset()