/*
    compare function
    render function
    remove function
    swap function
*/
class rectObject {
    constructor(key, value, svg) {
        this.key = key
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

    render(xPos, color) {
        this.rectSvg
            .attr('x', this.xScale(xPos))
            .attr('fill', color)
    }
}

class stepsObject {
    constructor(stepNumber, rectOrder, colorOrder, rectObjArray) {
        this.stepNumber = stepNumber
        this.rectOrder = rectOrder
        this.colorOrder = colorOrder
        this.rectObjArray = rectObjArray
    }
    renderStep() {
        for(let i = 0; i < numOfElements; ++i) {
            rectObjArray[i].render(this.rectOrder[i], this.colorOrder[i])
        }
    }
}

//Constants
const numOfElements = 10;
const maxVal = 50
const svg = d3.select('#svg')
const colorN = 'yellow'
const colorI = 'blue'
const colorD = 'green'

let stepIndex = 0
let rectObjArray = [] // Array of Rectangle SVG
let stepsObjArray = [] //Array of Steps Object

/*
    Generate Array of Random Numbers
    Generate rect for SVG
*/
reset()
function reset() {
    //Remove Rect SVG Elements on the DOM
    if(rectObjArray.length > 0) {
        for(let i = 0; i < numOfElements; ++i){
            rectObjArray[i].rectSvg.remove()
        }
    }
    
    rectObjArray = [] //Clear rectObjectArray

    //Create rectObject and setup the array
    for(let i = 0; i < numOfElements; ++i) {
        rectObjArray.push(new rectObject(i, Math.floor(Math.random() * maxVal) + 1, svg))
    }
    
    //Steps Obj Array Preparation
    const rectOrder = Array.from(Array(numOfElements).keys())
    const colorOrder = Array(numOfElements).fill(colorN)
    stepsObjArray.push(new stepsObject(0, rectOrder, colorOrder))

    stepsObjArray[0].renderStep()
    // renderSteps(stepsIndexArray[0])
    /* Sorting Algorithm
    for(let i = 1; i < rectObjArray.length; ++i) {
        //Var to keep arr[i] on memory
        const valueIndex = rectObjectArray[i].value
        //Index J for the next loop
        var j = i - 1
    
        while(j >= 0 && rectObjArray[j].value > valueIndex) {
            arr[j + 1] = arr[j]
            --j;
            arr[j + 1] = valueIndex //Because of j-- on the while loop, we need to index at j + 1
            
        }
    }
    */
}
