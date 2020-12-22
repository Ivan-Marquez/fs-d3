/// <reference path="../../node_modules/@types/d3/index.d.ts" />

async function drawBars() {
  // access data
  const dataset = await d3.json("./../../my_weather_data.json");
  const metricAccessor = (d) => d.humidity;
  const yAccessor = (d) => d.length;

  // create chart dimensions
  const width = 600;
  let dimensions = {
    width: width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;

  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // draw canvas
  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  wrapper.attr("role", "figure").attr("tabindex", "0");
  wrapper
    .append("title")
    .text("Histogram looking at the distribution of humidity in 2016");

  // create scales
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, metricAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const binsGenerator = d3
    .histogram()
    .domain(xScale.domain())
    .value(metricAccessor)
    .thresholds(12);

  const bins = binsGenerator(dataset);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();

  // draw data
  const binsContainer = bounds
    .append("g")
    .attr("tabindex", "0")
    .attr("role", "list")
    .attr("aria-label", "histogram bars");

  const binGroups = binsContainer
    .selectAll("g")
    .data(bins)
    .enter()
    .append("g")
    .attr("tabindex", "0")
    .attr("role", "listitem")
    .attr(
      "aria-label",
      (d) =>
        `There were ${yAccessor(d)} days between ${d.x0
          .toString()
          .slice(0, 4)} and ${d.x1.toString().slice(0, 4)} humidity levels.`
    );

  const barPadding = 1;

  binGroups // barRects
    .append("rect")
    .attr("x", (d) => xScale(d.x0) + barPadding / 2)
    .attr("y", (d) => yScale(yAccessor(d)))
    .attr("width", (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
    .attr("height", (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
    .attr("fill", "cornflowerblue");

  binGroups // barText
    .filter(yAccessor)
    .append("text")
    .attr("x", (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
    .attr("y", (d) => yScale(yAccessor(d)) - 5)
    .text(yAccessor)
    .style("text-anchor", "middle")
    .attr("fill", "darkgrey")
    .style("font-size", "12px")
    .style("font-family", "sans-serif");

  const mean = d3.mean(dataset, metricAccessor);

  bounds //meanLine
    .append("line")
    .attr("x1", xScale(mean))
    .attr("x2", xScale(mean))
    .attr("y1", -15)
    .attr("y2", dimensions.boundedHeight)
    .attr("stroke", "maroon")
    .attr("stroke-dasharray", "2px 4px");

  bounds // meanLabel
    .append("text")
    .attr("x", xScale(mean))
    .attr("y", -20)
    .text(`mean: ${mean.toFixed(2)}`)
    .attr("fill", "maroon")
    .style("font-size", "12px")
    .style("text-anchor", "middle");

  // draw peripherals
  const axisGenerator = d3.axisBottom().scale(xScale);

  const xAxis = bounds
    .append("g")
    .call(axisGenerator)
    .style("transform", `translateY(${dimensions.boundedHeight}px)`);

  xAxis // xAxisLabel
    .append("text")
    .attr("x", dimensions.boundedWidth / 2)
    .attr("y", dimensions.margin.bottom - 10)
    .attr("fill", "black")
    .style("font-size", "1.4em")
    .text("Humidity");

  wrapper
    .selectAll("text")
    .attr("role", "presentation")
    .attr("aria-hidden", "true");
}

drawBars();
