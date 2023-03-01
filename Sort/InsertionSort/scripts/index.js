function InsertionReset() {
    InsertionRender.SetupRectangles()
}

function InsertionNext() {
    InsertionRender.GetNextStep()
}

function InsertionPrevious() {
    InsertionRender.GetPreviousStep()
}

const InsertionRender = new RenderInsertion()

InsertionRender.SetupRectangles()
