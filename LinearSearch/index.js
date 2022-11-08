class RectObj {
    rect
    constructor(val) {
        this.val = val
    }
    renderRect(xPos) {
        
    }
    renderColor(color) {

    }
}

class StepObj{
    constructor(stepNumber, rectOrder, ColorOrder) {
        this.stepNumber = stepNumber
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

/*
    Return an array of svg:rect
*/
function prepareRectSvg(svg, size) {
    const rectArray = []
    for(let i = 0 ;  i < size; ++i) {
        const rectIndex = svg.append('rect')
            .attr('class', 'rectSvg')
    }
    return rectArray
}
const svg = d3.select('#svg')
function reset() {
    const RectObjArray = prepareRectSvg(svg, 10)
}