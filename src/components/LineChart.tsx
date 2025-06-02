import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', value: 12000 },
  { name: 'Tue', value: 21000 },
  { name: 'Wed', value: 18000 },
  { name: 'Thu', value: 28000 },
  { name: 'Fri', value: 22000 },
  { name: 'Sat', value: 32000 },
  { name: 'Sun', value: 15000 },
];

const formatYAxis = (tick) => {
  if (tick >= 1000) {
    return `$${tick / 1000}k`;
  }
  return `$${tick}`;
};

const CustomLineChart = () => {
  return (
    <div className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxis}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <Tooltip
            formatter={(value) => `$${value}`}
            labelStyle={{ color: '#374151' }}
            itemStyle={{ color: '#8B5CF6' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#A78BFA" // A slightly lighter purple
            strokeWidth={2}
            dot={false}
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.1} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;