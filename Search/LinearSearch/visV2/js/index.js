function LinearReset() {
    LinearRender.SetupRectangles()
}

function LinearNext() {
    LinearRender.GetNextStep()
}

function LinearPrevious() {
    console.log('LP')
}

function LinearFind() {
    console.log('LF')
}
const LinearRender = new Render()

LinearRender.SetupRectangles()