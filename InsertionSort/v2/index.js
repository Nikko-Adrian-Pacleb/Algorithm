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

const maxVal = 50
//Array of svgValue
let rectObjArray = []
//Array of order 
const steps = []
const svg = d3.select('#svg')
/*
    Generate Array of Random Numbers
    Generate rect for SVG
*/
reset()
function reset() {
    //Initialize the Array of Rectangle Object Values
    if(rectObjArray.length > 0) {
        for(let i = 0; i < 10; ++i){
            rectObjArray[i].svgRect.remove()
        }
    }
    rectObjArray = []
    for(let i = 0; i < 10; ++i) {
        const svgValueIndex = new svgValue(i, Math.floor(Math.random() * maxVal) + 1, svg)
        rectObjArray.push(svgValueIndex)
    }
}
console.log(rectObjArray)
