// Constants
const svgBinary = d3.select("#vis-svg-binary")
const maxValBinary = 50
const minValBinary = 20

class RenderBinary {
    colorNeutral = '#F2E205'
    colorIndex = '#F2A71B'
    colorFound = '#277FF2'
    colorDiscard = "#000000"

    ValueToFind = 35
    
    StepNumber = 0
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
        const tempValues = []
        //Generate random values
        for(let i = 0; i < 10; ++i) {
            tempValues.push(Math.floor(Math.random() * (maxValBinary - minValBinary)) + minValBinary)
        }
        tempValues.sort()
        for(let i = 0; i < 10; ++i) {
            this.RectangleArray.push(new BinaryRectangle(i, tempValues[i]))
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

    // Change the Value that the search algorithm is looking for
    SetValueToFind(value) {
        this.ValueToFind = value
        this.StepNumber = 0
        this.StepsColor = []
        this.GetStepsColor()
        // console.log(this.StepsColor)
        this.RenderStepsColor(0)
    }

    //Generate the steps for colors and rect positions
    GetStepsColor() {
        let found = false
        // Color Initialization
        const tempStepsColor = []
        for(let i = 0; i < 10; ++i){
            tempStepsColor.push(this.colorNeutral)
        }
        this.StepsColor.push([...tempStepsColor])
        
        if(this.BinarySearch(0, 10) != -1) {
            found = true;
        }

        return found
    }

    /* 
    Binary Search Algorithm
    Return -1 if the value is not found
    Return the position in the array if the value is found
    */
    BinarySearch(low, high) {
        if(low > high) {
            const tempStepsColor = []
            for(let i = 0; i < 10; ++i) {
                tempStepsColor.push(this.colorDiscard)
            }
            this.StepsColor.push([...tempStepsColor])
            return -1
        }
        else {
            const tempStepsColor = []
            const mid = Math.floor((low + high) / 2)
            for(let i = 0; i < 10; ++i) {
                if(i < low || i > high) {
                    tempStepsColor.push(this.colorDiscard)
                }
                else if(i == mid){
                    tempStepsColor.push(this.colorIndex)
                }
                else{
                    tempStepsColor.push(this.colorNeutral)
                }
            }
            this.StepsColor.push([...tempStepsColor])

            if(this.RectangleArray[mid].value == this.ValueToFind){
                for(let i = 0; i < 10; ++i) {
                    if(i == mid) {
                        tempStepsColor[i] = this.colorFound
                    }
                    else{
                        tempStepsColor[i] = this.colorDiscard
                    }
                }
                this.StepsColor.push([...tempStepsColor])
                return mid
            }
            else {
                if(this.ValueToFind > this.RectangleArray[mid].value){
                    return this.BinarySearch( mid + 1, high)
                }
                else if(this.ValueToFind < this.RectangleArray[mid].value){
                    return this.BinarySearch(low, mid - 1)
                }
            }
        }
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

class BinaryRectangle{
    constructor(key, value) {
        this.key = key
        this.value = value
        this.GroupSvg = svgBinary.append('g')
        // Rectangle SVG
        this.RectangleSvg = this.GroupSvg.append('rect')
            .attr('id', `binary-rect-object-${key}`)
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
        .domain([0, maxValBinary])
        .range([0, svgBinary.attr('height')])

    xScale = d3.scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([0, svgBinary.attr('width')])
        .paddingInner(0.12)


    // renderRect(xPos){
	//     this.rectSvg.transition()
    //         .attr('x', this.xScale(xPos))
    // }

    RenderColor(color) {
        this.RectangleSvg
            .attr('fill', color)
    }
}