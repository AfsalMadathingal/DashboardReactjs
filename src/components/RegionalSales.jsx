import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MapPin } from 'lucide-react';
import data from '../assets/data.json';

const RegionalSales = () => {
  const [regionalSales] = React.useState(data.data.regionalSales);

  const COLORS = {
    'North': '#3b82f6',
    'South': '#10b981',
    'East': '#f59e0b',
    'West': '#ef4444'
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Sales by Region</h2>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={regionalSales}
              dataKey="sales"
              nameKey="region"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              label={({ region, percent }) => 
                `${region} ${(percent * 100).toFixed(0)}%`
              }
            >
              {regionalSales.map((entry) => (
                <Cell key={entry.region} fill={COLORS[entry.region]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => `$${value.toLocaleString()}`}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RegionalSales;