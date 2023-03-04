function MergeReset() {
    MergeRender.SetupRectangles()
}

function MergeNext() {
    MergeRender.GetNextStep()
}

function MergePrevious() {
    MergeRender.GetPreviousStep()
}

const MergeRender = new RenderMerge()

MergeRender.SetupRectangles()

