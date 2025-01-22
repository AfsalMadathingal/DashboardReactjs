import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart3 } from 'lucide-react';
import data from '../assets/data.json';

const YearlyPerformance = () => {

    const [yearlyPerformance] = React.useState(data.data.yearlyPerformance);


  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Category Performance</h2>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={yearlyPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                padding: '1rem',
              }}
              formatter={(value) => `$${value.toLocaleString()}`}
            />
            <Legend />
            <Bar dataKey="electronics" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="furniture" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="clothing" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyPerformance;