class svgValue {
    constructor(key, value, svg){
        this.key = key
        this.value = value
        this.svgRect = svg.append('rect')
            .attr('id', `svgRect-ind-${key}`)
            .attr('class', `svgValue svgValue-val-${this.value}`)
            .attr('width', this.xScale.bandwidth())
            .attr('height', this.yScale(this.value))
            .attr('x', this.xScale(this.key))
            
    }
    yScale = d3.scaleLinear() //A[i] / domainMax * rangeMax
        .domain([0, maxVal]) //Min and Max values the data should have
        .range([0, svg.attr('height')])

    xScale = d3.scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([0, svg.attr('width')])
        .paddingInner(0.12)
}
const numOfElements = 10;
const maxVal = 50
let rectObjArray = [] // Array of Rectangle SVG
const rectSteps = [] // Array of Rect Order
const colorSteps = [] // Array of Color Order
const svg = d3.select('#svg')
/*
    Generate Array of Random Numbers
    Generate rect for SVG
*/
reset()
function reset() {
    //Remove Rect SVG Elements on the DOM
    if(rectObjArray.length > 0) {
        for(let i = 0; i < numOfElements; ++i){
            rectObjArray[i].remove()
        }
    }
    rectObjArray = []
    for(let i = 0; i < numOfElements; ++i) {
        const svgValueIndex = svg.append('rect')
            .attr('')

        
        svgValue(i, Math.floor(Math.random() * maxVal) + 1, svg)
        rectObjArray.push(svgValueIndex)
    }

    //Sorting Algorithm
    // for(let i = 1; i < rectObjArray.length; ++i) {
    //     //Var to keep arr[i] on memory
    //     const valueIndex = rectObjectArray[i].value
    //     //Index J for the next loop
    //     var j = i - 1
    
    //     while(j >= 0 && rectObjArray[j].value > valueIndex) {
    //         arr[j + 1] = arr[j]
    //         --j;
    //         arr[j + 1] = valueIndex //Because of j-- on the while loop, we need to index at j + 1
            
    //     }
    // }
}
