function LinearReset() {
    LinearRender.SetupRectangles()
}

function LinearNext() {
    LinearRender.GetNextStep()
}

function LinearPrevious() {
    console.log('LP')
}

function LinearUpdate() {
    console.log('LU')
}
const LinearRender = new Render()

LinearRender.SetupRectangles()