function SelectionReset() {
    SelectionRender.SetupRectangles()
}

function SelectionNext() {
    SelectionRender.GetNextStep()
}

function SelectionPrevious() {
    SelectionRender.GetPreviousStep()
}

const SelectionRender = new RenderSelection()

SelectionRender.SetupRectangles()

