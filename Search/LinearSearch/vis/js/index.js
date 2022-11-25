function RenderRect(numOfRect) {

}
const svg = d3.select('#svg')
const Vis = new RectVis(svg)
function reset() {
    Vis.SetupRect()
}

reset()