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

    renderRect(xPos){
	this.rectSvg.transition()
            .attr('x', this.xScale(xPos))
    }

    renderColor(color) {
        this.rectSvg
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
	    if(this.colorOrder == -1) {
		    for(let i = 0; i < numOfElements; ++i) {
                rectObjArray[this.rectOrder[i]].renderRect(i)
            }	
	    }
        else {
	        for(let i = 0; i < numOfElements; ++i) {
                rectObjArray[this.rectOrder[i]].renderRect(i)
		    	rectObjArray[this.rectOrder[i]].renderColor(this.colorOrder[i])
            }
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
    stepsObjArray = []
    stepIndex = 0
    const rectOrder = Array.from(Array(numOfElements).keys())
    const colorOrder = Array(numOfElements).fill(colorN)
    stepsObjArray.push(new stepsObject(0, rectOrder, colorOrder))

    stepsObjArray[stepIndex].renderStep() //Render First Step

    /* Sorting Algorithm */
    for(let i = 1; i < numOfElements; ++i) {
        //No change in position, Color reset
        let rectOrder = [...stepsObjArray[stepsObjArray.length - 1].rectOrder]
        let colorOrder = []
        for(let c = 0; c < i; ++c) {
            colorOrder.push(colorD)
        }
        colorOrder.push(colorI)
        for(let c = i + 1; c < numOfElements; ++c) {
            colorOrder.push(colorN) //Could be removed but change the render method to render only on colorStep.length
        }
        stepsObjArray.push(new stepsObject(stepsObjArray.length, [...rectOrder], [...colorOrder]))

        //Index J for the next loop
        let j = i - 1
    
        while(j >= 0 && rectObjArray[rectOrder[j]].value > rectObjArray[rectOrder[j+1]].value) {
            const index = rectOrder[j]
            rectOrder[j] = rectOrder[j + 1]
            rectOrder[j + 1] = index
            --j
	    
	    stepsObjArray.push(new stepsObject(stepsObjArray.length, [...rectOrder], -1))	    
        }
        
    }
    stepsObjArray.push(new stepsObject(stepsObjArray.length, [...stepsObjArray[stepsObjArray.length - 1].rectOrder], [...colorOrder]))
    console.log(stepsObjArray)
}

function next() {
    ++stepIndex
    stepsObjArray[stepIndex].renderStep()
}