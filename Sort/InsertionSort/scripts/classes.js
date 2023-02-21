// svg = d3.select('#svg')
const svgInsertion = d3.select('vis-svg-insertion')
class RenderInsertion{
    //Constants
    // colorN = '#F2E205'
    // colorI = '#F2A71B'
    // colorD = '#277FF2'
    colorNeutral = '#F2E205'
    colorIndex = '#F2A71B'
    colorDone = '#277FF2'
    
    numOfElements = 10;
    maxVal = 50

    // stepIndex = 0
    // rectObjArray = [] // Array of Rectangle SVG
    // stepsObjArray = [] //Array of Steps Object
    stepNumber = 0
    RectangleArray = []
    StepsColor = []

    constructor() {

    }

    //Remove RectSVG Elements on the DOM and Clear RectObjArray
    ClearSVG() {
        //Remove RectSVG on DOM
        if(this.RectangleArray.length > 0) {
            for(let i = 0; i < 10; ++i) {
                this.RectangleArray[i].GroupSvg.remove()
            }
        }

        this.RectangleArray = [] //Clear Array
    }
    
    //Create RectObjs and save it to array
    CreateRectangles() {
        for(let i = 0; i < 10; ++i) {
            this.RectangleArray.push(new LinearRectangle(i, Math.floor(Math.random() * (maxValLinear - minValLinear)) + minValLinear))
        }
    }

    //Simple run of 2 functions to properly setup the svg and the rectangles
    SetupRectangles() {
        this.ClearSVG()
        this.CreateRectangles()
        this.StepsColor = []
        this.GetStepsColor()
        this.StepNumber = 0
        this.RenderStepsColor(this.StepNumber)
    }

    // Generate the steps for colors and rect positions
    GetStepsColor() {
        let found = false
        // Color Initialization
        const tempStepsColor = []
        for(let i = 0; i < 10; ++i) {
            tempStepsColor.push(this.colorNeutral)
        }
        this.StepsColor.push([...tempStepsColor])

        for(let i = 0; i < 10; ++i) {
            if(this.RectangleArray[i].value == this.ValueToFind) {
                found = true
                tempStepsColor[i] = this.colorFound
                this.StepsColor.push([...tempStepsColor])
            }
            else {
                tempStepsColor[i] = this.colorIndex
                this.StepsColor.push([...tempStepsColor])
            }
        }

        return found
    }

    //Increment Step Number and Render the next step
    GetNextStep() {
        if(this.StepNumber == this.StepsColor.length - 1){
            return
        }
        
        this.StepNumber++

        this.RenderStepsColor(this.StepNumber)
    }

    //Decrement Step Number and Render the previous step
    GetPreviousStep() {
        if(this.StepNumber == 0) {
            return
        }

        this.StepNumber--

        this.RenderStepsColor(this.StepNumber)
    }

    RenderStepsColor(index) {
        const ColorSet = [...this.StepsColor[index]]
        for(let i = 0; i < 10; ++i) {
            this.RectangleArray[i].RenderColor(ColorSet[i])
        }
    }
}