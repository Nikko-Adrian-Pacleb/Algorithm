const LinearClassSVG = d3.select('#vis-svg-linear')
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
    
    //Button Array
    buttonArray = []

    //Constructor
    constructor(id) {
        this.id = id
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
            this.rectObjArray.push(new RectObj(i, Math.floor(Math.random() * this.maxVal) + 1, this.maxVal))
        }
    }

    SetupRect() {
        this.ClearSVG()
        this.CreateRect()
    }

    CreateButton(buttonId, buttonText, buttonFunction, xPos, yPos) {
        const newButton = new SVGButton(this.id, buttonId, buttonText, buttonFunction, xPos, yPos)
        this.buttonArray.push(newButton)
    }
}
class RectObj{
    constructor(key, value, maxVal) {

        this.key = key
        this.value = value
        this.maxVal = maxVal
        this.rectSvg = LinearClassSVG.append('rect')
            .attr('id', `rect-object-${key}`)
            .attr('class', 'rect-object')
            .attr('height', this.yScale(value))
            .attr('width', this.xScale.bandwidth())
    }
    
    yScale = d3.scaleLinear()
        .domain([0, 50]) //maxVal
        .range([0, LinearClassSVG.attr('height')]) //LinearClassSVG Height

    xScale = d3.scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([0, LinearClassSVG.attr('width')]) //LinearClassSVG Width
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

class SVGButton {
    constructor(visId, buttonId,buttonText, xPos, yPos, buttonFunction) {
        this.buttonText = buttonText
        this.buttonFunction = buttonFunction
        this.buttonGroup = LinearClassSVG.append('g')
            .attr('class', 'svg-button')
            .attr('id', `svg-button-${visId}-${buttonId}`)
        this.buttonGroup.append("rect")
            .attr('class', 'button-background')
            .attr('x', xPos)
            .attr('y', yPos)    
            .attr('width', 100)
            .attr('height', 57)
        this.buttonGroup.append('text')
            .attr('class', 'button-text')
            .attr('x', xPos)
            .attr('y', yPos)
            .text(buttonText)
    }
}