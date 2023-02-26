// svg = d3.select('#svg')

//Constants
const svgInsertion = d3.select('#vis-svg-insertion')
const maxValInsertion = 50
const minValInsertion = 20

class RenderInsertion{
    //Constants
    // colorN = '#F2E205'
    // colorI = '#F2A71B'
    // colorD = '#277FF2'
    colorNeutral = '#F2E205'
    colorIndex = '#F2A71B'
    colorDone = '#277FF2'
    
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
            this.RectangleArray.push(new InsertionRectangle(i, Math.floor(Math.random() * (maxValInsertion - minValInsertion)) + minValInsertion))
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
        const RectOrder = Array.from(Array(this.numOfElements).keys())
        const ColorOrder = Array(this.numOfElements).fill(this.colorNeutral)

        this.RectOrderArray.push([...RectOrder])
        this.ColorOrderArray.push([...ColorOrder])

        for(let i = 1; i < this.numOfElements; ++i) {
            let RectOrderIndex = [...this.RectOrderArray[this.RectOrderArray.length - 1]]
            let ColorOrderIndex = []

            for(let c = 0; c < i; ++c) {
                ColorOrderIndex.push(this.colorDone)
            }
            ColorOrderIndex.push(this.colorIndex)
            for(let c = i + 1; c < this.numOfElements; ++c) {
                ColorOrderIndex.push(this.colorNeutral)
            }

            this.RectOrderArray.push([...RectOrderIndex])
            this.ColorOrderArray.push([...ColorOrderIndex])

            let j = i - 1
            while(j >= 0 && this.RectangleArray[RectOrderIndex[j]].value > this.RectangleArray[RectOrderIndex[j+1]].value) {
                const indexRect = RectOrderIndex[j]
                RectOrderIndex[j] = RectOrderIndex[j + 1]
                RectOrderIndex[j + 1] = indexRect

                // const indexColor = ColorOrderIndex[j]
                // ColorOrderIndex[j] = ColorOrderIndex[j + i]
                // ColorOrderIndex[j + 1] = indexColor

                --j

                this.RectOrderArray.push([...RectOrderIndex])
                this.ColorOrderArray.push([-1])
                // this.ColorOrderArray.push([...ColorOrderIndex])
            }

            // this.RectOrderArray.push([...RectOrderIndex])
            // this.ColorOrderArray.push([...ColorOrderIndex])
        }

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

class InsertionRectangle{
    constructor(key, value) {
        this.key = key
        this.value = value
        this.GroupSvg = svgInsertion.append('g')
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
        .domain([0, maxValInsertion])
        .range([0, svgInsertion.attr('height')])

    xScale = d3.scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([0, svgInsertion.attr('width')])
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
