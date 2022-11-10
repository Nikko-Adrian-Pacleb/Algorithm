class RectObj {
    constructor(svg, val) {
        this.val = val
        this.rectSVG = svg.append('rect')
            .attr('width', 100)
            .attr('height', 100)
    }
}