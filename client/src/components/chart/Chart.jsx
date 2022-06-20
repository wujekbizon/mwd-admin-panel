import './chart.scss';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#58a6ff" />
          <Line type="monotone" dataKey={dataKey} stroke="#58a6ff" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#161b22" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
