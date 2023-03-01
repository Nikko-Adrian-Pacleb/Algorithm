function BubbleReset() {
    BubbleRender.SetupRectangles()
}

function BubbleNext() {
    BubbleRender.GetNextStep()
}

function BubblePrevious() {
    BubbleRender.GetPreviousStep()
}

const BubbleRender = new RenderBubble()

BubbleRender.SetupRectangles()

