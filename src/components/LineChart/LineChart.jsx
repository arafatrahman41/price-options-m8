import PropTypes from "prop-types";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentMarks = [
    { student_id: 1, name: "Alice", math: 85, chemistry: 78, physics: 82 },
    { student_id: 2, name: "Bob", math: 78, chemistry: 82, physics: 75 },
    { student_id: 3, name: "Charlie", math: 92, chemistry: 88, physics: 90 },
    { student_id: 4, name: "David", math: 68, chemistry: 75, physics: 70 },
    { student_id: 5, name: "Emma", math: 90, chemistry: 85, physics: 88 },
    { student_id: 6, name: "Frank", math: 73, chemistry: 70, physics: 75 },
    { student_id: 7, name: "Grace", math: 85, chemistry: 80, physics: 84 },
    { student_id: 8, name: "Henry", math: 79, chemistry: 82, physics: 77 },
    { student_id: 9, name: "Ivy", math: 88, chemistry: 90, physics: 85 },
    { student_id: 10, name: "Jack", math: 95, chemistry: 92, physics: 98 },
  ];

  return (
    <div className="mt-16">
      <LChart width={800} height={400} data={studentMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics" stroke="green"></Line>
      </LChart>
    </div>
  );
};

LineChart.propTypes = {};

export default LineChart;
