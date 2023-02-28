// svg = d3.select('#svg')

//Constants
const svgSelection = d3.select('#vis-svg-selection')
const maxValSelection = 50
const minValSelection = 20

class RenderSelection{
    //Constants
    // colorN = '#F2E205'
    // colorI = '#F2A71B'
    // colorD = '#277FF2'
    colorNeutral = '#F2E205'
    colorIndex = '#F2A71B'
    colorDone = '#277FF2'
    colorSmallest = '#06D6A0'
    numOfElements = 10;
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
        for(let i = 0; i < 10; ++i) {
            this.RectangleArray.push(new SelectionRectangle(i, Math.floor(Math.random() * (maxValSelection - minValSelection)) + minValSelection))
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
        // console.log(Array(numOfElements))
        // console.log(Array(numOfElements).keys())
        // console.log(Array.from(Array(numOfElements).keys()))
        // const RectOrder = Array.from(Array(this.numOfElements).keys())
        // const ColorOrder = Array(this.numOfElements).fill(this.colorNeutral)

        // Initial Format
        this.RectOrderArray.push(Array.from(Array(this.numOfElements).keys()))
        this.ColorOrderArray.push(Array(this.numOfElements).fill(this.colorNeutral))

        let RectOrderIndex = [...this.RectOrderArray[this.RectOrderArray.length - 1]]
        let ColorOrderIndex = []
        for(let i = 0; i < this.numOfElements; ++i){
            // Get Initial Smallest
            // RectOrderIndex = [...this.RectOrderArray[this.RectOrderArray.length - 1]]
            
            ColorOrderIndex = []
            for(let c = 0; c < i; ++c) {
                ColorOrderIndex.push(this.colorDone)
            }
            ColorOrderIndex.push(this.colorSmallest)
            for(let c = i + 1; c < this.numOfElements; ++c) {
                ColorOrderIndex.push(this.colorNeutral)
            }

            // !!!!!!!!!!!!!
            console.log('for1s', RectOrderIndex)
            this.RectOrderArray.push([...RectOrderIndex])
            this.ColorOrderArray.push([...ColorOrderIndex])

            let smallestIndex = i
            let smallest = this.RectangleArray[RectOrderIndex[i]].value
            for(let j = i + 1; j < this.numOfElements; ++j){
                ColorOrderIndex = []
                for(let c = 0; c < i; ++c) {
                    ColorOrderIndex.push(this.colorDone)
                }
                for(let c = i; c < smallestIndex; ++c) {
                    ColorOrderIndex.push(this.colorNeutral)
                }
                ColorOrderIndex.push(this.colorSmallest)
                for(let c = smallestIndex + 1; c < j; ++c) {
                    ColorOrderIndex.push(this.colorNeutral)
                }
                ColorOrderIndex.push(this.colorIndex)
                for(let c = j + 1; c < this.numOfElements; ++c) {
                    ColorOrderIndex.push(this.colorNeutral)
                }
                // RectOrderIndex = [...this.RectOrderArray[this.RectOrderArray.length - 1]]
                this.RectOrderArray.push([...RectOrderIndex])
                this.ColorOrderArray.push([...ColorOrderIndex])

                if(this.RectangleArray[RectOrderIndex[j]].value < smallest) {
                    smallestIndex = j
                    smallest = this.RectangleArray[RectOrderIndex[j]].value

                    // !!!!!!!!!!!!!
                    console.log('smallerfound', RectOrderIndex)

                    ColorOrderIndex = []
                    for(let c = 0; c < i; ++c){
                        ColorOrderIndex.push(this.colorDone)
                    }
                    for(let c = i; c < smallestIndex; ++c){
                        ColorOrderIndex.push(this.colorNeutral)
                    }
                    ColorOrderIndex.push(this.colorSmallest)
                    for(let c = smallestIndex + 1; c < this.numOfElements; ++c) {
                        ColorOrderIndex.push(this.colorNeutral)
                    }

                    this.RectOrderArray.push([...RectOrderIndex])
                    this.ColorOrderArray.push([...ColorOrderIndex])
                }
            }
            //Swap
            // !!!!!!!!!!!!!
            console.log('beforeswap', RectOrderIndex)
            console.log('sm', smallestIndex, `roi[${i}]`, RectOrderIndex[i], 'roi[sm]', RectOrderIndex[smallestIndex])
            const swapIndex = RectOrderIndex[smallestIndex]
            RectOrderIndex[smallestIndex] = RectOrderIndex[i]
            RectOrderIndex[i] = swapIndex
            // !!!!!!!!!!!!!
            console.log('afterswap', RectOrderIndex)
            this.RectOrderArray.push([...RectOrderIndex])
            this.ColorOrderArray.push([-1])
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

class SelectionRectangle{
    constructor(key, value) {
        this.key = key
        this.value = value
        this.GroupSvg = svgSelection.append('g')
        // Rectangle SVG
        this.RectangleSvg = this.GroupSvg.append('rect')
            .attr('id', `linear-rect-object-${key}`)
            .attr('class', 'rect-object')
            .attr('height', this.yScale(value))
            .attr('width', this.xScale.bandwidth())
            .attr('x', this.xScale(this.key))
        // Text SVG
        // this.TextSvg = this.GroupSvg.append('text')
        //     .attr('y', 20)
        //     .attr('x', this.xScale(this.key) + 5)
        //     .text(`${this.value}`)
        //     .style('fill', 'white')
    }
    
    yScale = d3.scaleLinear()
        .domain([0, maxValSelection])
        .range([0, svgSelection.attr('height')])

    xScale = d3.scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([0, svgSelection.attr('width')])
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
