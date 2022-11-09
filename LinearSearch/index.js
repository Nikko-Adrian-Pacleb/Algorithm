class RectObj {
    constructor(value, svg) {
        this.value = value
        this.rectSvg = svg.append('rect')
            .attr('id', `rect-object-${this.key}`)
            .attr('class', 'rect-object')
            .attr('height', this.yScale(this.value))
            .attr('width', this.xScale.bandwidth())
    }
    yScale = d3.scaleLinear()
        .domain([0, maxVal])
        .range([0, svg.attr('height')])

    xScale = d3.scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([0, svg.attr('width')])
        .paddingInner(0.12)

    renderRect(xPos){
	this.rectSvg.transition()
            .attr('x', this.xScale(xPos))
    }

    renderColor(color) {
        this.rectSvg
            .attr('fill', color)
    }
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

const svg = d3.select('#svg')
function reset() {
    
}

reset()