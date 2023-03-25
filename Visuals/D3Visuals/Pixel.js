class CreatePixel {
  constructor(xPosition, yPosition) {
    const pixel = d3
      .select("#svg")
      .append("rect")
      .attr("x", xPosition)
      .attr("y", yPosition)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", "black")
      .on("mouseover", function (event, d) {
        // Checks if mouse is down
        if (mouseDown) {
          // Change the color of the pixel to apply draw
          d3.select(this).style("fill", "white");
        }
      });
  }
}
