/*
    Modules used:
    select
    scaleLinear
    scaleBand
*/
const arr = [2, 8, 3, 5, 4, 9]
// const arr = [9, 8, 7, 6, 5, 4]
// const arr = [1, 2, 3, 4, 5, 6]

const svg = d3.select("#svg")
svg.style('background-color', 'red')

const render = arr => {
    const yScale = d3.scaleLinear() //A[i] / domainMax * rangeMax
        .domain([0, 10]) //Min and Max values the data should have
        .range([0, 500])

    /*
    Band Scale is useful for ordinal attributes
    Domain - Data Space
    Range - Screen Space
    */
    const xScale = d3.scaleBand()
        .domain(arr) //Create a list of all the values inside the data
        .range([0,700]) //Create a range on how the big(width or length) of the bar(if its a bar chart) the values of the data will be presented
        .paddingInner(0.12)

    svg.selectAll('rect').data(arr)
        .enter().append('rect')
            .attr('x', d => xScale(d)) //Move the data based on the value from yScale
            .attr('width', xScale.bandwidth()) //Reflects the width based on the value
            .attr('height', d => yScale(d))
            .attr('class', 'rect-val')
            .attr('id', d => "rect-val-" + d) //Bandwidth is computed width of the single bar
}

//Render the svg for the array
render(arr)

function printArr() {
    console.log("-")
    for(let i = 0; i < arr.length; ++i) {
        console.log(arr[i])
    }
}
// const rectval2 = d3.select('#rect-val-2')
// console.log(rectval2.attr('x'))
// console.log(d3.select('#rect-val-' + arr[2]).attr("x"))
for(let i = 1; i < arr.length; ++i) {
    // printArr()
    for(let j = i-1; j >= 0; --j) {
        if(arr[j] > arr[j+1]) {
            const jRectX = d3.select('#rect-val-' + arr[j]).attr('x')
            const jp1RectX = d3.select('#rect-val-' + arr[j+1]).attr('x')
            d3.select('#rect-val-' + arr[j]).transition().attr('x', jp1RectX)
            d3.select('#rect-val-' + arr[j+1]).transition().attr('x', jRectX)
            // d3.select('#rect-val-' + arr[j]).attr('x', jp1RectX)
            // d3.select('#rect-val-' + arr[j+1]).attr('x', jRectX)
            const index = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = index

            // const jRectX = d3.select('#rect-val-' + arr[j]).attr('x')
            // const jp1RectX = d3.select('#rect-val-' + arr[j+1]).attr('x')
            // d3.select('#rect-val-' + arr[j]).transition().attr('x', jp1RectX).on("end", function() {
            //     d3.select('#rect-val-' + arr[j+1]).transition().attr('x', jRectX)
            // })
            // // d3.select('#rect-val-' + arr[j]).attr('x', jp1RectX)
            // // d3.select('#rect-val-' + arr[j+1]).attr('x', jRectX)
            // const index = arr[j]
            // arr[j] = arr[j+1]
            // arr[j+1] = index




        }
    }
}

console.log(arr)
