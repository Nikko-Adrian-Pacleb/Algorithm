// svg = d3.select('#svg')

//Constants
const svgWidth = 900
const svgHeight = 510
const svgMerge = d3.select('#vis-svg-merge')
const maxValMerge = 50
const minValMerge = 10

const squareWidth = svgWidth / 12
const marginX = squareWidth / 2
const marginY = squareWidth * 1.5

// let cursorX = 0
// let cursorY = 0

class RenderMerge{
    //Constants
    // colorN = '#F2E205'
    // colorI = '#F2A71B'
    // colorD = '#277FF2'
    colorNeutral = '#F2E205'
    colorIndex = '#F2A71B'
    colorDone = '#277FF2'
    colorSmallerFound = '#06D6A0'
    numOfElements = 8
    maxVal = 50

    // stepIndex = 0
    // rectObjArray = [] // Array of Rectangle SVG
    // stepsObjArray = [] //Array of Steps Object
    StepNumber = 0
    SquareArray = []
    ColorOrderArray = []
    SquareOrderArray = []

    constructor() {

    }

    //Remove RectSVG Elements on the DOM and Clear RectObjArray
    ClearSVG() {
        //Remove RectSVG on DOM
        if(this.SquareArray.length > 0) {
            for(let i = 0; i < 10; ++i) {
                this.SquareArray[i].GroupSvg.remove()
            }
        }

        this.SquareArray = [] //Clear Array
    }
    
    //Create RectObjs and save it to array
    CreateRectangles() {
        const cursorX = (svgWidth / 2) - ((squareWidth * 4) + 7)
        const cursorY = 40 //40 is the margin from the top
        for(let i = 0; i < this.numOfElements; ++i) {
            this.SquareArray.push(new MergeRectangle(Math.floor(Math.random() * (maxValMerge - minValMerge)) + minValMerge, cursorX, cursorY))
        }
        console.log(this.SquareArray)
        const SquareArrayCopy = [...this.SquareArray]
        this.MergeSort(SquareArrayCopy)
        console.log(SquareArrayCopy)


        // const randomArray = [20, 29, 12, 43, 15, 23, 76, 28]
        // const randomArrayCopy = [...randomArray]
        // this.MergeSort(randomArrayCopy)
        // console.log(randomArrayCopy)
    }

    //Simple run of 2 functions to properly setup the svg and the rectangles
    SetupRectangles() {
        this.ClearSVG()
        this.CreateRectangles()
        this.RectOrderArray = []
        this.ColorOrderArray = []
        this.GetStepsColor()
        this.StepNumber = 0
        // console.log(this.RectOrderArray)
        // console.log(this.ColorOrderArray)
        this.RenderRectangleColorOrder(this.StepNumber)
        // this.RenderColorOrder(this.StepNumber)
        // this.RenderRectangleOrder(this.StepNumber)
    }

    // Merge(array, p, q, r) {
    //     const mergedArray = []
    //     let i = 0; //i indexes the smallest remaining element in L[]
    //     let j = 0; //j indexes the smallest remaining element in R[]
    //     // console.log(k)
    //     //While for comparing
    //     while(i < leftArray.length && j < rightArray.length){
    //         if(leftArray[i] < rightArray[j]){
    //             mergedArray.push(leftArray[i])
    //             array[k] = leftArray[i]
    //             ++i
    //         }
    //         else {
    //             mergedArray = rightArray[j]
    //             ++j
    //         }
    //     }
    
    //     //While for remainders
    //     while(i < leftArray.length){
    //         mergedArray.push(leftArray[i])
    //         ++i
    //     }
    //     while(j < rightArray.length){
    //         mergedArray.push(rightArray[i])
    //         ++j
    //     }
    // }
    
    // MergeSortRecursion(array, p, r, indexCursorX, indexCursorY, direction) {
    //     const thisRecursionNumberOfElements = r - p + 1
    //     let thisRecursionStartingPoint
    //     let thisRecursionCursorX = indexCursorX
    //     let thisRecursionSquareArray = []
        
    //     //Visuals
    //     if(direction == 'left') {
    //         thisRecursionCursorX -= marginX + (thisRecursionNumberOfElements * squareWidth) + thisRecursionNumberOfElements
    //     }
    //     else {
    //         thisRecursionCursorX += marginX
    //     }
    //     thisRecursionStartingPoint = thisRecursionCursorX 
    //     for(let squareNumber = p; squareNumber <= r; ++squareNumber) {
    //         const newSquare = new MergeRectangle(array[squareNumber], thisRecursionCursorX, indexCursorY)
    //         thisRecursionCursorX += squareWidth + 1

    //         thisRecursionSquareArray.push(newSquare)
    //     }
        
    //     if(p >= r) {
    //         return
    //     }
        
        
    //     const q = Math.floor((p + r) / 2)
    //     const thisRecursionMidPointX = (thisRecursionStartingPoint + thisRecursionCursorX) / 2
        
    //     const leftRecurssionArray = this.MergeSortRecursion(array, p, q, thisRecursionMidPointX , indexCursorY + marginY, 'left')
    //     console.log(leftRecurssionArray)

    //     const rightRecursionArray = this.MergeSortRecursion(array, q + 1, r, thisRecursionMidPointX, indexCursorY + marginY, 'right')
    //     console.log(rightRecursionArray)
        
    //     // Delete Square Arrays Before Merge
    //     this.Merge(thisRecursionSquareArray, leftRecurssionArray, rightRecursionArray, p, q, r)

    //     // return thisRecursionSquareArray
    // }
    
    Merge(array, p, q, r) {
        const leftArray = array.slice(p, q + 1)
        const rightArray = array.slice(q + 1, r + 1)
        let i = 0; //i indexes the smallest remaining element in L[]
        let j = 0; //j indexes the smallest remaining element in R[]
        let k = p; //k indexes the location in A[]
        // console.log(k)
        //While for comparing
        while(i < leftArray.length && j < rightArray.length){
            if(leftArray[i].value < rightArray[j].value){
                array[k] = leftArray[i]
                ++i
            }
            else {
                array[k] = rightArray[j]
                ++j
            }
            ++k
        }
    
        //While for remainders
        while(i < leftArray.length){
            array[k] = leftArray[i]
            ++i
            ++k
        }
        while(j < rightArray.length){
            array[k] = rightArray[j]
            ++j
            ++k
        }
    }
    
    MergeSortRecursion(array, p, r) {
        if(p >= r) {
            return
        }
        const q = Math.floor((p + r) / 2)
        this.MergeSortRecursion(array, p, q)
        this.MergeSortRecursion(array, q + 1, r)
    
        this.Merge(array, p, q, r)
    }
    
    MergeSort(array) {
        this.MergeSortRecursion(array, 0, array.length - 1)
        return array
    }


    // MergeSort(array) {
    //     const cursorX = (svgWidth / 2) - ((squareWidth * 4) + 7)
    //     const cursorY = 40 //40 is the margin from the top
    //     this.MergeSortRecursion(array, 0, array.length - 1, cursorX, cursorY)
    //     return array
    // }

    // Generate the steps for colors and rect positions
    GetStepsColor() {
        
    }

    //Increment Step Number and Render the next step
    GetNextStep() {
        if(this.StepNumber == this.ColorOrderArray.length - 1){
            return
        }
        
        this.StepNumber++
        
        // this.RenderColorOrder(this.StepNumber)
        // this.RenderRectangleOrder(this.StepNumber)
        this.RenderRectangleColorOrder(this.StepNumber)

        // document.getElementById("insertion-vis-extra-span-current-step").textContent = this.StepNumber
    }

    //Decrement Step Number and Render the previous step
    GetPreviousStep() {
        if(this.StepNumber == 0) {
            return
        }

        this.StepNumber--

        this.RenderRectangleColorOrder(this.StepNumber)
    }

    RenderRectangleColorOrder(StepNumberIndex) {
        const ColorOrder = [...this.ColorOrderArray[StepNumberIndex]]
        const RectOrder = [...this.RectOrderArray[StepNumberIndex]]

        for(let i = 0; i < 10; ++i) {
            if(ColorOrder[0] == -1){
                this.SquareArray[RectOrder[i]].RenderRect(i)
            }
            else {
                this.SquareArray[RectOrder[i]].RenderColor(ColorOrder[i])
                this.SquareArray[RectOrder[i]].RenderRect(i)
            }
        }
    }
}

class MergeRectangle{
    constructor(value, mrcursorX, mrcursorY) {
        this.value = value
        this.mrcursorX = mrcursorX
        this.mrcursorY = mrcursorY
        this.GroupSvg = svgMerge.append('g')

        this.SquareSvg = this.GroupSvg.append('rect')
            .attr('x', mrcursorX)
            .attr('y', mrcursorY)
            .attr('width', squareWidth)
            .attr('height', squareWidth)
        this.SquareText = this.GroupSvg.append('text')
            .attr('x', this.mrcursorX + (squareWidth / 2))
            .attr('y', (this.mrcursorY + (squareWidth / 2)) + 5)
            .text(`${this.value}`)
            .style('fill', 'white')
            .style("text-anchor", "middle")
    }
    
    yScale = d3.scaleLinear()
        .domain([0, maxValMerge])
        .range([0, svgMerge.attr('height')])

    xScale = d3.scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([0, svgMerge.attr('width')])
        .paddingInner(0.12)


    RenderRect(xPos, yPos){
	    this.SquareSvg.transition()
            .attr('x', xPos)
            .attr('y', yPos)
        this.SquareText.transition()
            .attr('x', xPos)
            .attr('y', yPos)
    }

    RenderColor(color) {
        this.SquareSvgSvg
            .attr('fill', color)
    }

    DeleteSvg() {
        this.GroupSvg.selectAll('*').remove()
        this.GroupSvg.remove()
    }
}
