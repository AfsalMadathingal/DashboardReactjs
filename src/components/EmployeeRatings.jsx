import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Star } from 'lucide-react';
import data from '../assets/data.json';

const EmployeeRatings = () => {
  const [employeeRatings] = React.useState(data.data.employeeRatings);

  const COLORS = {
    'Excellent': '#10b981',
    'Good': '#3b82f6',
    'Average': '#f59e0b',
    'Poor': '#ef4444'
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Star className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Employee Performance Ratings</h2>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={employeeRatings}
              dataKey="count"
              nameKey="rating"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              label={({ rating, percent }) => 
                `${rating} ${(percent * 100).toFixed(0)}%`
              }
            >
              {employeeRatings.map((entry) => (
                <Cell key={entry.rating} fill={COLORS[entry.rating]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => [`${value} employees`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmployeeRatings;