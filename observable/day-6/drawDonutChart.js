async function drawDonutChart() {
  const data = [
    { type: "Poultry", value: 48.9954 },
    { type: "Beef", value: 25.9887 },
    { type: "Pig", value: 22.9373 },
    { type: "Sheep", value: 0.4869 },
  ];

  // access data
  metricAccessor = (d) => d.type;
  metricValueAccessor = (d) => d.value;

  // create chart dimensions
  let dimensions = {
    height: 500,
    width: 500,
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;

  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // draw canvas
  const container = d3
    .select("#container")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = container
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  // create scales
  const colors = ["#976393", "#685489", "#43457f", "#ff9b83"];
  const colorScale = d3.scaleOrdinal(data.map(metricAccessor), colors);

  // draw data
  const pieGenerator = d3.pie().value(metricValueAccessor);
  const pieArcs = pieGenerator(data);

  const arcGenerator = d3
    .arc()
    .innerRadius((0.5 * dimensions.boundedHeight) / 2)
    .outerRadius((0.85 * dimensions.boundedHeight) / 2);

  bounds
    .append("g")
    .attr("class", "donut-container")
    .attr(
      "transform",
      `translate(${dimensions.boundedWidth / 2},${
        dimensions.boundedHeight / 2
      })`
    )
    .selectAll("path")
    .data(pieArcs)
    .join("path")
    .style("stroke", "white")
    .style("stroke-width", 2)
    .style("fill", (d) => colorScale(d.data.type))
    .attr("d", arcGenerator);

  // draw peripherals
  const labelArcs = d3
    .arc()
    .innerRadius((0.95 * dimensions.boundedHeight) / 2)
    .outerRadius((0.95 * dimensions.boundedHeight) / 2);

  const text = bounds
    .append("g")
    .attr("class", "labels-container")
    .attr(
      "transform",
      `translate(${dimensions.boundedWidth / 2}, ${
        dimensions.boundedHeight / 2
      })`
    )
    .selectAll("text")
    .data(pieArcs)
    .join("text")
    .attr("transform", (d) => `translate(${labelArcs.centroid(d)})`)
    .attr("text-anchor", "middle");

  text
    .selectAll("tspan")
    .data((d) => [d.data.type, `${d.data.value.toFixed(1)} kg`])
    .join("tspan")
    .attr("x", 0)
    .style("font-family", "sans-serif")
    .style("font-size", 12)
    .style("font-weight", (d, i) => (i ? undefined : "bold"))
    .style("fill", "#222")
    .attr("dy", (d, i) => (i ? "1.2em" : 0))
    .text((d) => d);
}

drawDonutChart();
