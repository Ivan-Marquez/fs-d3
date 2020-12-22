async function drawBarChart() {
  const data = [
    { year: 2005, value: 734.69 },
    { year: 2006, value: 750.7 },
    { year: 2007, value: 755.13 },
    { year: 2008, value: 694.19 },
    { year: 2009, value: 681.83 },
    { year: 2010, value: 718.98 },
    { year: 2011, value: 740.57 },
    { year: 2012, value: 752.24 },
    { year: 2013, value: 767.24 },
    { year: 2014, value: 802.45 },
    { year: 2015, value: 805.65 },
    { year: 2016, value: 935.58 },
    { year: 2017, value: 967.13 },
    { year: 2018, value: 1007.24 },
  ];

  // access data
  const xAccessor = (d) => d.year;
  const yAccessor = (d) => d.value;

  // create chart dimensions
  const width = 900;
  const height = 500;
  let dimensions = {
    width: width,
    height: height,
    margin: {
      top: 20,
      right: 10,
      bottom: 20,
      left: 35,
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
  const xScale = d3
    .scaleBand()
    .domain(data.map(xAccessor))
    .range([0, dimensions.boundedWidth])
    .padding(0.5);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, yAccessor)])
    .range([dimensions.boundedHeight, 0]);

  // draw data
  bounds
    .append("g")
    .attr("class", "bars")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .attr("x", (d) => xScale(xAccessor(d)))
    .attr("y", (d) => yScale(yAccessor(d)))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => yScale(0) - yScale(yAccessor(d)))
    .style("fill", "#7472c0");

  // draw peripherals
  const xAxisGenerator = d3.axisBottom(xScale).tickSizeOuter(0);
  bounds
    .append("g")
    .attr("class", "x-axis")
    .call(xAxisGenerator)
    .style("transform", `translateY(${dimensions.boundedHeight}px)`);

  const yAxisGenerator = d3.axisLeft(yScale).tickSizeOuter(0);
  bounds.append("g").attr("class", "y-axis").call(yAxisGenerator);
}

drawBarChart();
