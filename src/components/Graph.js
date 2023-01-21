import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalGridLines
} from "react-vis";

function Graph({ data }) {
  const values = [...data];

  return (
    <>
      <XYPlot height={200} width={300} xType="ordinal">
        <VerticalGridLines/>
        <YAxis />
        <XAxis />
        <VerticalBarSeries data={values} />
      </XYPlot>
    </>
  );
}

export default Graph;
