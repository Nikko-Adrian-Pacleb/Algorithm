function BinaryReset() {
    BinaryRender.SetupRectangles()
}

function BinaryNext() {
    BinaryRender.GetNextStep()
}

function BinaryPrevious() {
    BinaryRender.GetPreviousStep()
}

function BinaryUpdate() {
    const value = parseInt(document.getElementById("binary-vis-extra-input-find").value)
    BinaryRender.SetValueToFind(value)
}

const BinaryRender =  new RenderBinary()

BinaryRender.SetupRectangles()
console.log(BinaryRender.StepsColor)