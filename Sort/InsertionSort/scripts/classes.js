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
    RectOrder = []

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
        for(let i = 1; i < this.numOfElements; ++i) {
            let RectOrderIndex = [...RectOrder[this.RectOrder.length - 1]]
            let StepsColorIndex = []

            for(let c = 0; c < i; ++c) {
                StepsColorIndex.push(this.colorDone)
            }
            StepsColorIndex.push(this.colorIndex)
            for(let c = i + 1; i < this.numOfElements; ++i) {
                StepsColorIndex.push(this.colorNeutral)
            }
            this.RectOrder.push([...RectOrderIndex])
            this.StepsColor.push([...StepsColorIndex])

            let j = i - 1
            while(j >= 0 && rectObjArray[this.RectOrder[j]]. value > rectObjArray[this.RectOrder[j+1]].value) {
                const index = RectOrderIndex[j]
                RectOrderIndex[j] = RectOrderIndex[j + 1]
                RectOrderIndex[j + 1] = index
                --j

                this.RectOrder.push
            }
        }

        let RectOrderIndex = [...]

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

class InsertionRectangle{
    constructor(key, value) {
        this.key = key
        this.value = value
        this.GroupSvg = svgLinear.append('g')
        // Rectangle SVG
        this.RectangleSvg = this.GroupSvg.append('rect')
            .attr('id', `linear-rect-object-${key}`)
            .attr('class', 'rect-object')
            .attr('height', this.yScale(value))
            .attr('width', this.xScale.bandwidth())
            .attr('x', this.xScale(this.key))
        // Text SVG
        this.TextSvg = this.GroupSvg.append('text')
            .attr('y', 20)
            .attr('x', this.xScale(this.key) + 5)
            .text(`${this.value}`)
            .style('fill', 'white')
    }
    
    yScale = d3.scaleLinear()
        .domain([0, maxValLinear])
        .range([0, svgLinear.attr('height')])

    xScale = d3.scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([0, svgLinear.attr('width')])
        .paddingInner(0.12)


    RenderRect(xPos){
	    this.rectSvg.transition()
            .attr('x', this.xScale(xPos))
    }

    RenderColor(color) {
        this.RectangleSvg
            .attr('fill', color)
    }
}

class StepsObject {
    constructor(StepNumber, RectOrder, ColorOrder, RectObjArray) {
        this.
    }
}