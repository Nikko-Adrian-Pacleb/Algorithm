const svgs = d3.select('#vis-svg-linear')
class RectVis {
    //Constants
    maxVal = 50
    numOfElements = 10
    
    //Colors
    colorN = '#F2E205'
    colorI = '#F2A71B'
    colorD = '#277FF2'

    //Arrays
    stepIndex = 0
    rectObjArray = []

    //Constructor
    constructor(svg) {
        this.svg = svg
    }

    //Remove RectSVG Elements on the DOM and Clear RectObjArray
    ClearSVG() {
        //Remove RectSVG on DOM
        if(this.rectObjArray.length > 0) {
            for(let i = 0; i < this.numOfElements; ++i) {
                this.rectObjArray[i].remove()
            }
        }

        this.rectObjArray = [] //Clear Array
    }
    
    //Create RectObjs and save it to array
    CreateRect() {
        for(let i = 0; i < this.numOfElements; ++i) {
            this.rectObjArray.push(new RectObj(this.svg, i, Math.floor(Math.random() * this.maxVal) + 1, this.maxVal))
        }
    }

    SetupRect() {
        this.ClearSVG()
        this.CreateRect()
    }
}
class RectObj{
    constructor(svg, key, value, maxVal) {
        this.svg = svg
        this.key = key
        this.value = value
        this.maxVal = maxVal
        this.rectSvg = svg.append('rect')
            .attr('id', `rect-object-${key}`)
            .attr('class', 'rect-object')
            .attr('height', this.yScale(value))
            .attr('width', this.xScale.bandwidth())
    }
    
    yScale = d3.scaleLinear()
        .domain([0, 50]) //maxVal
        .range([0, svgs.attr('height')]) //SVG Height

    xScale = d3.scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([0, svgs.attr('width')]) //SVG Width
        .paddingInner(0.12)


    // renderRect(xPos){
	//     this.rectSvg.transition()
    //         .attr('x', this.xScale(xPos))
    // }

    // renderColor(color) {
    //     this.rectSvg
    //         .attr('fill', color)
    // }
}
class Steps {
    constructor(size) {
        this.size = size
        this.stepIndex = 0
        
    }
}
class StepObj{
    constructor(stepNumber, rectOrder, colorOrder) {
        this.stepNumber = stepNumber
        this.rectOrder = rectOrder
        this.colorOrder = colorOrder
    }
    
    renderStep() {
        if(this.color == -1) {
            for(let i = 0; i < rectOrder.length; ++i) {
                rectOrder[i].renderRect(i)
            }
        }
        else {
            for(let i = 0; i < rectOrder.length; ++i) {
                rectOrder[i].renderRect(i)
                rectOrder[i].renderColor(colorOrder[i])
            }
        }
    }
}