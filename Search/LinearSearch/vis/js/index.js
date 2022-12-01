// SVG Setup
const LinearVis = new RectVis("linear")
function reset() {
    LinearVis.ClearSVG()
    LinearVis.CreateRect()
    LinearVis.CreateButton("TrialID", "TrialText", 200, 200, function() {
        console.log("Button Created")
    })
    // Vis.SetupRect()
}

reset()