class Render {
    constructor(svg) {
        this.svg = svg
    }

    renderRectArray(array) {
        for(let i = 0; i < array.length; ++i) {
            this.svg.append(array[i])
        }
    }

    updateRectArray(array) {

    }
    renderRect()
}