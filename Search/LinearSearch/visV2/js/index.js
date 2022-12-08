function LinearReset() {
    LinearRender.SetupRectangles()
}

function LinearNext() {
    LinearRender.GetNextStep()
}

function LinearPrevious() {
    LinearRender.GetPreviousStep()
}

function LinearUpdate() {
    const value = parseInt(document.getElementById("linear-vis-extra-input-find").value)
    LinearRender.SetValueToFind(value)
}
const LinearRender = new Render()

LinearRender.SetupRectangles()