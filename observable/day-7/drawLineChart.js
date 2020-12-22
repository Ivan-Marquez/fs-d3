async function drawLineChart() {
  const data = [
    [
      {
        name: "United States",
        iso: "USA",
        date: "2000-04-01T00:00:00.000Z",
        price: 2.51,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2001-04-01T00:00:00.000Z",
        price: 2.54,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2002-04-01T00:00:00.000Z",
        price: 2.49,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2003-04-01T00:00:00.000Z",
        price: 2.71,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2004-05-01T00:00:00.000Z",
        price: 2.9,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2005-06-01T00:00:00.000Z",
        price: 3.06,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2006-01-01T00:00:00.000Z",
        price: 3.15,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2006-05-01T00:00:00.000Z",
        price: 3.1,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2007-01-01T00:00:00.000Z",
        price: 3.22,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2007-06-01T00:00:00.000Z",
        price: 3.41,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2008-06-01T00:00:00.000Z",
        price: 3.57,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2009-07-01T00:00:00.000Z",
        price: 3.57,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2010-01-01T00:00:00.000Z",
        price: 3.58,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2010-07-01T00:00:00.000Z",
        price: 3.733333333,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2011-07-01T00:00:00.000Z",
        price: 4.065,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2012-01-01T00:00:00.000Z",
        price: 4.19722,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2012-07-01T00:00:00.000Z",
        price: 4.3275,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2013-01-01T00:00:00.000Z",
        price: 4.367395833,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2013-07-01T00:00:00.000Z",
        price: 4.556666667,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2014-01-01T00:00:00.000Z",
        price: 4.624166667,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2014-07-01T00:00:00.000Z",
        price: 4.795,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2015-01-01T00:00:00.000Z",
        price: 4.79,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2015-07-01T00:00:00.000Z",
        price: 4.79,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2016-01-01T00:00:00.000Z",
        price: 4.93,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2016-07-01T00:00:00.000Z",
        price: 5.04,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2017-01-01T00:00:00.000Z",
        price: 5.06,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2017-07-01T00:00:00.000Z",
        price: 5.3,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2018-01-01T00:00:00.000Z",
        price: 5.28,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2018-07-01T00:00:00.000Z",
        price: 5.51,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2019-01-01T00:00:00.000Z",
        price: 5.58,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2019-07-09T00:00:00.000Z",
        price: 5.74,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2020-01-14T00:00:00.000Z",
        price: 5.67,
      },
      {
        name: "United States",
        iso: "USA",
        date: "2020-07-01T00:00:00.000Z",
        price: 5.71,
      },
    ],
    [
      {
        name: "Sweden",
        iso: "SWE",
        date: "2000-04-01T00:00:00.000Z",
        price: 2.71493212669683,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2001-04-01T00:00:00.000Z",
        price: 2.33463035019455,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2002-04-01T00:00:00.000Z",
        price: 2.5,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2003-04-01T00:00:00.000Z",
        price: 3.59712230215827,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2004-05-01T00:00:00.000Z",
        price: 3.94218134034166,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2005-06-01T00:00:00.000Z",
        price: 4.16655466250907,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2006-01-01T00:00:00.000Z",
        price: 4.27910112942336,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2006-05-01T00:00:00.000Z",
        price: 4.53013569815569,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2007-01-01T00:00:00.000Z",
        price: 4.54464761228475,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2007-06-01T00:00:00.000Z",
        price: 4.85890762922118,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2008-06-01T00:00:00.000Z",
        price: 6.37492974995177,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2009-07-01T00:00:00.000Z",
        price: 4.93099764197164,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2010-01-01T00:00:00.000Z",
        price: 5.50684119117211,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2010-07-01T00:00:00.000Z",
        price: 6.56400241403395,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2011-07-01T00:00:00.000Z",
        price: 7.63985351685819,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2012-01-01T00:00:00.000Z",
        price: 5.91306354379994,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2012-07-01T00:00:00.000Z",
        price: 5.72868135202144,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2013-01-01T00:00:00.000Z",
        price: 6.38809635544636,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2013-07-01T00:00:00.000Z",
        price: 6.15687377003092,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2014-01-01T00:00:00.000Z",
        price: 6.28751071734781,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2014-07-01T00:00:00.000Z",
        price: 5.95377413692218,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2015-01-01T00:00:00.000Z",
        price: 4.96859530363977,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2015-07-01T00:00:00.000Z",
        price: 5.12751315611928,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2016-01-01T00:00:00.000Z",
        price: 5.23143277318251,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2016-07-01T00:00:00.000Z",
        price: 5.22871254297632,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2017-01-01T00:00:00.000Z",
        price: 5.26053339616748,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2017-07-01T00:00:00.000Z",
        price: 5.81892070131244,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2018-01-01T00:00:00.000Z",
        price: 6.12311068987879,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2018-07-01T00:00:00.000Z",
        price: 5.82684002467838,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2019-01-01T00:00:00.000Z",
        price: 5.83859649122807,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2019-07-09T00:00:00.000Z",
        price: 5.38255734798233,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2020-01-14T00:00:00.000Z",
        price: 5.4444926050047,
      },
      {
        name: "Sweden",
        iso: "SWE",
        date: "2020-07-01T00:00:00.000Z",
        price: 5.75593101637048,
      },
    ],
    [
      {
        name: "China",
        iso: "CHN",
        date: "2000-04-01T00:00:00.000Z",
        price: 1.19565217391304,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2001-04-01T00:00:00.000Z",
        price: 1.19565217391304,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2002-04-01T00:00:00.000Z",
        price: 1.26811594202899,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2003-04-01T00:00:00.000Z",
        price: 1.19565217391304,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2004-05-01T00:00:00.000Z",
        price: 1.256038647343,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2005-06-01T00:00:00.000Z",
        price: 1.26866753661012,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2006-01-01T00:00:00.000Z",
        price: 1.30206718666683,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2006-05-01T00:00:00.000Z",
        price: 1.30824819337154,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2007-01-01T00:00:00.000Z",
        price: 1.41491838493498,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2007-06-01T00:00:00.000Z",
        price: 1.44647389114626,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2008-06-01T00:00:00.000Z",
        price: 1.82908984489318,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2009-07-01T00:00:00.000Z",
        price: 1.82943785033735,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2010-01-01T00:00:00.000Z",
        price: 1.83091164752754,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2010-07-01T00:00:00.000Z",
        price: 1.9477932387965,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2011-07-01T00:00:00.000Z",
        price: 2.27307990690458,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2012-01-01T00:00:00.000Z",
        price: 2.43844509540021,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2012-07-01T00:00:00.000Z",
        price: 2.44971433043751,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2013-01-01T00:00:00.000Z",
        price: 2.57218185325703,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2013-07-01T00:00:00.000Z",
        price: 2.60836960597317,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2014-01-01T00:00:00.000Z",
        price: 2.74321220233669,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2014-07-01T00:00:00.000Z",
        price: 2.72655405514415,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2015-01-01T00:00:00.000Z",
        price: 2.76905739354423,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2015-07-01T00:00:00.000Z",
        price: 2.73787283385943,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2016-01-01T00:00:00.000Z",
        price: 2.68366320026837,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2016-07-01T00:00:00.000Z",
        price: 2.78526504941599,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2017-01-01T00:00:00.000Z",
        price: 2.82967112291745,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2017-07-01T00:00:00.000Z",
        price: 2.9171270718232,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2018-01-01T00:00:00.000Z",
        price: 3.17164179104478,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2018-07-01T00:00:00.000Z",
        price: 3.09574146783449,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2019-01-01T00:00:00.000Z",
        price: 3.05122852095712,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2019-07-09T00:00:00.000Z",
        price: 3.05028614589083,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2020-01-14T00:00:00.000Z",
        price: 3.12273057371097,
      },
      {
        name: "China",
        iso: "CHN",
        date: "2020-07-01T00:00:00.000Z",
        price: 3.09845077461269,
      },
    ],
    [
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2000-04-01T00:00:00.000Z",
        price: 2.38080000045235,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2001-04-01T00:00:00.000Z",
        price: 2.26160000072371,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2002-04-01T00:00:00.000Z",
        price: 2.37629999919206,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2003-04-01T00:00:00.000Z",
        price: 2.9810000002981,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2004-05-01T00:00:00.000Z",
        price: 3.2880000013152,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2005-06-01T00:00:00.000Z",
        price: 3.58313199823029,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2006-01-01T00:00:00.000Z",
        price: 3.51382499956077,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2006-05-01T00:00:00.000Z",
        price: 3.76691649704796,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2007-01-01T00:00:00.000Z",
        price: 3.80921099765962,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2007-06-01T00:00:00.000Z",
        price: 4.1668899487422,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2008-06-01T00:00:00.000Z",
        price: 5.34270458800347,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2009-07-01T00:00:00.000Z",
        price: 4.6171189975617,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2010-01-01T00:00:00.000Z",
        price: 4.84394399698368,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2010-07-01T00:00:00.000Z",
        price: 4.33252382664316,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2011-07-01T00:00:00.000Z",
        price: 4.92840183586624,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2012-01-01T00:00:00.000Z",
        price: 4.43070477464433,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2012-07-01T00:00:00.000Z",
        price: 4.34443469296111,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2013-01-01T00:00:00.000Z",
        price: 4.87803112862027,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2013-07-01T00:00:00.000Z",
        price: 4.65939148386547,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2014-01-01T00:00:00.000Z",
        price: 4.96184353491684,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2014-07-01T00:00:00.000Z",
        price: 4.95354246993891,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2015-01-01T00:00:00.000Z",
        price: 4.26383200194175,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2015-07-01T00:00:00.000Z",
        price: 4.05390499827466,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2016-01-01T00:00:00.000Z",
        price: 3.99900000059985,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2016-07-01T00:00:00.000Z",
        price: 4.20562899815015,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2017-01-01T00:00:00.000Z",
        price: 4.06177800194884,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2017-07-01T00:00:00.000Z",
        price: 4.46502449985779,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2018-01-01T00:00:00.000Z",
        price: 4.8357874973246,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2018-07-01T00:00:00.000Z",
        price: 4.735082,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2019-01-01T00:00:00.000Z",
        price: 4.6419075,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2019-07-09T00:00:00.000Z",
        price: 4.572252,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2020-01-14T00:00:00.000Z",
        price: 4.582058,
      },
      {
        name: "Euro area",
        iso: "EUZ",
        date: "2020-07-01T00:00:00.000Z",
        price: 4.7861385,
      },
    ],
  ];

  // access data
  const countryAccessor = (d) => d[0].name;
  const priceAccessor = (d) => d.price;

  // create chart dimensions
  let dimensions = {
    width: 900,
    height: 500,
    margin: {
      top: 10,
      right: 80,
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
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  // create scales
  const countryNames = data.map(countryAccessor);

  const colorScale = d3
    .scaleOrdinal()
    .domain(countryNames)
    .range(d3.schemeCategory10);

  const dateParser = d3.utcParse("%Y-%m-%dT%H:%M:%S.%LZ");
  const startDate = dateParser(data[0][0].date);
  const endDate = dateParser(data[0][data[0].length - 1].date);

  const xScale = d3
    .scaleTime()
    .domain([startDate, endDate])
    .range([0, dimensions.boundedWidth]);

  const prices = data.flat().map(priceAccessor);
  const yMax = d3.max([...prices, 8]);

  const yScale = d3
    .scaleLinear()
    .domain([1, yMax])
    .range([dimensions.boundedHeight, 0]);

  // draw data
  const lineGenerator = d3
    .line()
    .x((d) => xScale(dateParser(d.date)))
    .y((d) => yScale(d.price))
    .curve(d3.curveNatural);

  bounds
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("class", "big-mac-line")
    .attr("d", lineGenerator)
    .style("stroke", (d) => colorScale(d[0].name))
    .style("stroke-width", 2)
    .style("fill", "transparent");

  // draw peripherals
  const formatter = d3.format("$.2f");

  const yAxisGenerator = d3.axisLeft(yScale).tickFormat(formatter);
  const xAxisGenerator = d3.axisBottom(xScale);

  bounds
    .selectAll("text.label")
    .data(data)
    .join("text")
    .attr("class", "label")
    .attr("x", dimensions.boundedWidth + 5)
    .attr(
      "y",
      (d) => yScale(d[d.length - 1].price) + (d[0].name === "Sweden" ? -10 : 0)
    )
    .attr("dy", "0.35em")
    .style("fill", (d) => colorScale(d[0].name))
    .style("font-family", "sans-serif")
    .style("font-size", 12)
    .text((d) => d[0].name);

  bounds
    .append("g")
    .attr("class", "x-axis")
    .style("transform", `translateY(${dimensions.boundedHeight}px)`)
    .call(xAxisGenerator);

  bounds
    .append("g")
    .attr("class", "y-axis")
    .call(yAxisGenerator)
    .selectAll(".domain")
    .remove();
}

drawLineChart();
