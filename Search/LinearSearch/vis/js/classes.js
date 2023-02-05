// Constants
const svgLinear = d3.select('#vis-svg-linear')
const maxValLinear = 50
const minValLinear = 20

class RenderLinear{
    colorNeutral = '#F2E205'
    colorIndex = '#F2A71B'
    colorFound = '#277FF2'

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
        for(let i = 0; i < 10; ++i) {
            this.RectangleArray.push(new Rectangle(i, Math.floor(Math.random() * (maxValLinear - minValLinear)) + minValLinear))
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

class Rectangle{
    constructor(key, value) {
        this.key = key
        this.value = value
        this.GroupSvg = svgLinear.append('g')
        // Rectangle SVG
        this.RectangleSvg = this.GroupSvg.append('rect')
            .attr('id', `rect-object-${key}`)
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


    // renderRect(xPos){
	//     this.rectSvg.transition()
    //         .attr('x', this.xScale(xPos))
    // }

    RenderColor(color) {
        this.RectangleSvg
            .attr('fill', color)
    }
}

