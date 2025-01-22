import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import data from '../assets/data.json';

const MonthlySales = () => {
  const [monthlySales] = React.useState(data.data.monthlySales);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Monthly Sales Overview</h2>
      </div>
      
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlySales}>
            <CartesianGrid strokeDasharray="3 3" className="text-gray-200" />
            <XAxis 
              dataKey="month" 
              className="text-sm text-gray-600"
            />
            <YAxis 
              className="text-sm text-gray-600"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Legend />
            <Bar 
              dataKey="sales" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlySales;