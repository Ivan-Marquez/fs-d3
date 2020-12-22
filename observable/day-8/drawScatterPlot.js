/// <reference path="../../node_modules/@types/d3/index.d.ts" />

async function drawcatterPlot() {
  const data = [
    {
      company: "Johnson & Johnson",
      revenues_mm: 71890,
      profit_mm: 18540,
      profit_as_of_revenues: 0.2578940047294478,
      category: "Pharmaceuticals",
    },
    {
      company: "Procter & Gamble",
      revenues_mm: 71726,
      profit_mm: 10508,
      profit_as_of_revenues: 0.14650196581434904,
      category: "Household & Personal Products",
    },
    {
      company: "Abbvie",
      revenues_mm: 25638,
      profit_mm: 5953,
      profit_as_of_revenues: 0.23219439893907481,
      category: "Pharmaceuticals",
    },
    {
      company: "Amgen",
      revenues_mm: 22991,
      profit_mm: 7722,
      profit_as_of_revenues: 0.33587055804445215,
      category: "Pharmaceuticals",
    },
    {
      company: "Eli Lilly",
      revenues_mm: 21222,
      profit_mm: 2738,
      profit_as_of_revenues: 0.12901705777023842,
      category: "Pharmaceuticals",
    },
    {
      company: "Bristol-Myers Squibb",
      revenues_mm: 19427,
      profit_mm: 4457,
      profit_as_of_revenues: 0.22942296803417925,
      category: "Pharmaceuticals",
    },
    {
      company: "Altria Group",
      revenues_mm: 19337,
      profit_mm: 14239,
      profit_as_of_revenues: 0.7363603454517247,
      category: "Tobacco",
    },
    {
      company: "Kimberly-Clark",
      revenues_mm: 18202,
      profit_mm: 2166,
      profit_as_of_revenues: 0.11899791231732777,
      category: "Household & Personal Products",
    },
    {
      company: "General Mills",
      revenues_mm: 16563,
      profit_mm: 1697,
      profit_as_of_revenues: 0.10245728430839823,
      category: "Food",
    },
    {
      company: "Colgate-Palmolive",
      revenues_mm: 15195,
      profit_mm: 2441,
      profit_as_of_revenues: 0.16064494899638038,
      category: "Household & Personal Products",
    },
    {
      company: "Conagra Brands",
      revenues_mm: 14134,
      profit_mm: -677,
      profit_as_of_revenues: -0.04789868402433847,
      category: "Food",
    },
    {
      company: "Land O'Lakes",
      revenues_mm: 13233,
      profit_mm: 245,
      profit_as_of_revenues: 0.01851432025995617,
      category: "Food",
    },
    {
      company: "Pepsico",
      revenues_mm: 62789,
      profit_mm: 6329,
      profit_as_of_revenues: 0.1007979104620236,
      category: "Food",
    },
    {
      company: "Kellogg",
      revenues_mm: 13014,
      profit_mm: 694,
      profit_as_of_revenues: 0.053327186107269095,
      category: "Food",
    },
    {
      company: "Reynolds American",
      revenues_mm: 12503,
      profit_mm: 6073,
      profit_as_of_revenues: 0.48572342637766935,
      category: "Tobacco",
    },
    {
      company: "Biogen",
      revenues_mm: 11449,
      profit_mm: 3703,
      profit_as_of_revenues: 0.32343436107957024,
      category: "Pharmaceuticals",
    },
    {
      company: "Estee Lauder",
      revenues_mm: 11262,
      profit_mm: 1115,
      profit_as_of_revenues: 0.09900550523885633,
      category: "Household & Personal Products",
    },
    {
      company: "Celgene",
      revenues_mm: 11229,
      profit_mm: 1999,
      profit_as_of_revenues: 0.17802119511977915,
      category: "Pharmaceuticals",
    },
    {
      company: "Hormel Foods",
      revenues_mm: 9523,
      profit_mm: 890,
      profit_as_of_revenues: 0.09345794392523364,
      category: "Food",
    },
    {
      company: "Campbell Soup",
      revenues_mm: 7961,
      profit_mm: 563,
      profit_as_of_revenues: 0.07071975882426831,
      category: "Food",
    },
    {
      company: "J. M. Smucker",
      revenues_mm: 7811,
      profit_mm: 689,
      profit_as_of_revenues: 0.08820893611573422,
      category: "Food",
    },
    {
      company: "Dean Foods",
      revenues_mm: 7710,
      profit_mm: 120,
      profit_as_of_revenues: 0.01556420233463035,
      category: "Food",
    },
    {
      company: "Hershey",
      revenues_mm: 7440,
      profit_mm: 720,
      profit_as_of_revenues: 0.0967741935483871,
      category: "Food",
    },
    {
      company: "Pfizer",
      revenues_mm: 52824,
      profit_mm: 7215,
      profit_as_of_revenues: 0.13658564288959563,
      category: "Pharmaceuticals",
    },
    {
      company: "Constellation Brands",
      revenues_mm: 6548,
      profit_mm: 1055,
      profit_as_of_revenues: 0.16111789859499084,
      category: "Beverages",
    },
    {
      company: "Dr. Pepper Snapple Group",
      revenues_mm: 6440,
      profit_mm: 847,
      profit_as_of_revenues: 0.13152173913043477,
      category: "Beverages",
    },
    {
      company: "HRG Group",
      revenues_mm: 6403,
      profit_mm: -199,
      profit_as_of_revenues: -0.031079181633609246,
      category: "Household & Personal Products",
    },
    {
      company: "Treehouse Foods",
      revenues_mm: 6175,
      profit_mm: -229,
      profit_as_of_revenues: -0.03708502024291498,
      category: "Food",
    },
    {
      company: "Avon Products",
      revenues_mm: 5853,
      profit_mm: -108,
      profit_as_of_revenues: -0.018452075858534086,
      category: "Household & Personal Products",
    },
    {
      company: "Clorox",
      revenues_mm: 5761,
      profit_mm: 648,
      profit_as_of_revenues: 0.11248047214025343,
      category: "Household & Personal Products",
    },
    {
      company: "Coca-Cola",
      revenues_mm: 41863,
      profit_mm: 6527,
      profit_as_of_revenues: 0.15591333635907603,
      category: "Beverages",
    },
    {
      company: "Merck",
      revenues_mm: 39807,
      profit_mm: 3920,
      profit_as_of_revenues: 0.09847514256286583,
      category: "Pharmaceuticals",
    },
    {
      company: "Gilead Sciences",
      revenues_mm: 30390,
      profit_mm: 13501,
      profit_as_of_revenues: 0.4442579795985522,
      category: "Pharmaceuticals",
    },
    {
      company: "Philip Morris International",
      revenues_mm: 26685,
      profit_mm: 6967,
      profit_as_of_revenues: 0.2610830054337643,
      category: "Tobacco",
    },
    {
      company: "Kraft Heinz",
      revenues_mm: 26487,
      profit_mm: 3632,
      profit_as_of_revenues: 0.1371238720881942,
      category: "Food",
    },
    {
      company: "Mondelez International",
      revenues_mm: 25923,
      profit_mm: 1659,
      profit_as_of_revenues: 0.06399722254368707,
      category: "Food",
    },
  ];

  // access data
  xAccessor = (d) => d.revenues_mm;
  yAccessor = (d) => d.profit_mm;

  // create chart dimensions
  let dimensions = {
    width: 900,
    height: 600,
    margin: {
      top: 10,
      right: 100,
      bottom: 30,
      left: 50,
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
      `translate(${dimensions.margin.left}px, ${dimensions.margin.bottom}px)`
    );

  // create scales
  const xScale = d3.scaleLinear(d3.extent(data, xAccessor), [
    0,
    dimensions.boundedWidth,
  ]);

  const yScale = d3.scaleLinear(d3.extent(data, yAccessor), [
    dimensions.boundedHeight,
    0,
  ]);

  const colorScale = d3.scaleOrdinal().range(d3.schemeCategory10);

  // draw data
  const g = bounds
    .append("g")
    .style("font-family", "sans-serif")
    .style("font-size", 10);

  g.selectAll("g")
    .data(data)
    .join("g")
    .attr("class", "scatter-point")
    .attr(
      "transform",
      (d) => `translate(${xScale(d.revenues_mm)},${yScale(d.profit_mm)})`
    )
    .call((g) =>
      g
        .append("circle")
        .attr("r", 5)
        .style("stroke", (d) => colorScale(d.category))
        .style("stroke-width", 2)
        .style("fill", "transparent")
    )
    .call((g) =>
      g
        .append("text")
        .attr("x", 8)
        .attr("dy", "0.35em")
        .text((d) => (d.revenues_mm < 10000 ? "" : d.company))
    );

  // draw peripherals
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  bounds
    .append("g")
    .attr("class", "y-axis")
    .call(yAxis)
    .select(".domain")
    .remove();

  bounds
    .append("g")
    .attr("class", "x-axis")
    .style("transform", `translateY(${dimensions.boundedHeight - 8}px)`)
    .call(xAxis)
    .select(".domain")
    .remove();

  g.append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left + 6},${dimensions.margin.top + 4})`
    )
    .append("text")
    .style("transform", "rotate(90)")
    .text(data.y);

  g.append("text")
    .attr("x", dimensions.margin.right - 6)
    .attr("y", dimensions.margin.bottom - 5)
    .attr("text-anchor", "end")
    .text(data.x);

  // TODO: review x and y labels
  // TODO: add legend
  // TODO: add accessibility
}

drawcatterPlot();
