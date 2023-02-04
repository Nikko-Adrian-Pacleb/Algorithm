// Constants
const svgBinary = d3.select("#vis-svg-binary")
const maxValBinary = 50
const minValBinary = 20

class RenderBinary {
    colorNeutral = '#F2E205'
    colorIndex = '#F2A71B'
    colorFound = '#277FF2'

    ValueToFind = 25
    
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
            this.RectangleArray.push(new Rectangle(i, tempValues[i]))
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
        console.log(this.StepsColor)
        this.RenderStepsColor(0)
    }

    //Generate the steps for colors and rect positions


}

class Rectangle{
    constructor(key, value) {
        this.key = key
        this.value = value
        this.GroupSvg = svgBinary.append('g')
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