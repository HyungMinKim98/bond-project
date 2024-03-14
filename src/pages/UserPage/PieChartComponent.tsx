import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

// Define the structure of a single investment
interface Investment {
  type: string;
  percentage: number;
}

interface PieChartComponentProps {
  investments: Investment[];
}

// Define the colors for the chart
export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const PieChartComponent: React.FC<PieChartComponentProps> = ({ investments }) => (
  <PieChart width={400} height={400}>
    <Pie
      dataKey="percentage"
      isAnimationActive={false}
      data={investments}
      cx={200}
      cy={200}
      outerRadius={80}
      fill="#8884d8"
      label
    >
      {investments.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
);