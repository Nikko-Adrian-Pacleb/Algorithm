// svg = d3.select('#svg')

//Constants
const svgWidth = 900
const svgHeight = 510
const svgMerge = d3.select('#vis-svg-merge')
const maxValMerge = 50
const minValMerge = 10

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
    RectangleArray = []
    ColorOrderArray = []
    RectOrderArray = []

    constructor() {

    }

    //Remove RectSVG Elements on the DOM and Clear RectObjArray
    ClearSVG() {
        //Remove RectSVG on DOM
        if(this.RectangleArray.length > 0) {
            for(let i = 0; i < 10; ++i) {
                this.RectangleArray[i].GroupSvg.remove()
            }
        }

        this.RectangleArray = [] //Clear Array
    }
    
    //Create RectObjs and save it to array
    CreateRectangles() {
        for(let i = 0; i < this.numOfElements; ++i) {
            this.RectangleArray.push(Math.floor(Math.random() * (maxValMerge - minValMerge)) + minValMerge)
        }


        const squareWidth = svgWidth / 15
        const marginX = squareWidth / 2
        const marginY = squareWidth * 1.5
        let cursorX = 0
        let cursorY = 0
        
        // Level 0
        cursorY = 40
        cursorX = (svgWidth / 2) - ((squareWidth * 4) + 7)
        for(let i = 0; i < this.numOfElements; ++i) {
            svgMerge.append('rect')
                .attr('x', cursorX)
                .attr('y', cursorY)
                .attr('width', squareWidth)
                .attr('height', squareWidth)
            svgMerge.append('text')
                .attr('x', cursorX + (squareWidth / 2))
                .attr('y', (cursorY + (squareWidth / 2)) + 5)
                .text(`${this.RectangleArray[i]}`)
                .style('fill', 'white')
                .style("text-anchor", "middle")
            cursorX += squareWidth + 1
        }
    }

    //Simple run of 2 functions to properly setup the svg and the rectangles
    SetupRectangles() {
        this.ClearSVG()
        this.CreateRectangles()
        this.RectOrderArray = []
        this.ColorOrderArray = []
        this.GetStepsColor()
        this.StepNumber = 0
        console.log(this.RectOrderArray)
        console.log(this.ColorOrderArray)
        this.RenderRectangleColorOrder(this.StepNumber)
        // this.RenderColorOrder(this.StepNumber)
        // this.RenderRectangleOrder(this.StepNumber)
    }

    // Generate the steps for colors and rect positions
    GetStepsColor() {
        // Initial Format
        this.RectOrderArray.push(Array.from(Array(this.numOfElements).keys()))
        this.ColorOrderArray.push(Array(this.numOfElements).fill(this.colorNeutral))

        let RectOrderIndex = [...this.RectOrderArray[this.RectOrderArray.length - 1]]
        let ColorOrderIndex = []

        const squareWidth = svgWidth / 15
        const marginX = squareWidth / 2
        const marginY = squareWidth * 1.5
        let cursorX = 0
        let cursorY = 0
        cursorX = svgWidth / 2 
        // Level 1 - 3
        let squareGroupsPerSide = 1
        let squarePerGroup = 4
        for(let level = 1; level < 4; ++level) {
            let SquareIndex = 0

            //Go down per level
            cursorY = (level * marginY) + 40
            //Go to the middle of the svg
            cursorX = (svgWidth / 2)

            //Print Left
                //Go to left start
            cursorX -= squareGroupsPerSide * marginX
            cursorX -= 4 *  squareWidth
            for(let group = 0; group  < squareGroupsPerSide; ++group) {
                for(let square = 0; square < squarePerGroup; ++square) {
                    svgMerge.append('rect')
                        .attr('x', cursorX)
                        .attr('y', cursorY)
                        .attr('width', squareWidth)
                        .attr('height', squareWidth)
                    svgMerge.append('text')
                        .attr('x', cursorX + (squareWidth / 2))
                        .attr('y', (cursorY + (squareWidth / 2)) + 5)
                        .text(`${this.RectangleArray[SquareIndex]}`)
                        .style('fill', 'white')
                        .style("text-anchor", "middle")
                    cursorX += squareWidth + 1
                    ++SquareIndex
                }
                cursorX += marginX + 1
            }

            //Go to the middle of the svg
            cursorX = (svgWidth / 2)

            //Print Right
                //Go to right start
            cursorX += (marginX / 2) + 3
            for(let group = 0; group  < squareGroupsPerSide; ++group) {
                for(let square = 0; square < squarePerGroup; ++square) {
                    svgMerge.append('rect')
                        .attr('x', cursorX)
                        .attr('y', cursorY)
                        .attr('width', squareWidth)
                        .attr('height', squareWidth)
                    svgMerge.append('text')
                        .attr('x', cursorX + (squareWidth / 2))
                        .attr('y', (cursorY + (squareWidth / 2)) + 5)
                        .text(`${this.RectangleArray[SquareIndex]}`)
                        .style('fill', 'white')
                        .style("text-anchor", "middle")
                    cursorX += squareWidth + 1
                    ++SquareIndex
                }
                cursorX += marginX
            }


            squareGroupsPerSide *= 2
            squarePerGroup /= 2
        }

        // End Format
        this.RectOrderArray.push([...this.RectOrderArray[this.RectOrderArray.length - 1]])
        this.ColorOrderArray.push(Array(this.numOfElements).fill(this.colorNeutral))
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
                this.RectangleArray[RectOrder[i]].RenderRect(i)
            }
            else {
                this.RectangleArray[RectOrder[i]].RenderColor(ColorOrder[i])
                this.RectangleArray[RectOrder[i]].RenderRect(i)
            }
        }
    }

    // RenderColorOrder(index) {
    //     const ColorOrder = [...this.ColorOrderArray[index]]
    //     for(let i = 0; i < 10; ++i) {
    //         this.RectangleArray[ColorOrder].RenderColor(i)
    //     }
    // }

    // RenderRectangleOrder(index) {
    //     const RectOrder = [...this.RectOrderArray[index]]
    //     for(let i = 0; i < 10; ++i) {
    //         this.RectangleArray[RectOrder[i]].RenderRect(i)
    //     }
    // }
}

class MergeRectangle{
    constructor(value) {
        this.value = value
        this.GroupSvg = svgMerge.append('g')

        svgMerge.append('rect')
            .attr('x', cursorX)
            .attr('y', cursorY)
            .attr('width', squareWidth)
            .attr('height', squareWidth)
        svgMerge.append('text')
            .attr('x', cursorX + (squareWidth / 2))
            .attr('y', (cursorY + (squareWidth / 2)) + 5)
            .text(`${this.RectangleArray[SquareIndex]}`)
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


    RenderRect(xPos){
	    this.RectangleSvg.transition()
            .attr('x', this.xScale(xPos))
    }

    RenderColor(color) {
        this.RectangleSvg
            .attr('fill', color)
    }
}
