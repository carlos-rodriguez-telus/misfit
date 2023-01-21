import { XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from "react-vis";

function Graph() {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 9 }
  ];

  return (
    <>
      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} />
      </XYPlot>
    </>
  );
}

export default Graph;
