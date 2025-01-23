import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users } from 'lucide-react';
import data from '../assets/data.json';

const UserGrowth = () => {
  const [userGrowth] = React.useState(data.data.userGrowth);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Users className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-gray-800">User Growth Trends</h2>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userGrowth} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => `${value} users`}
              contentStyle={{ 
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                padding: '1rem',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="newUsers"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ strokeWidth: 2, fill: '#3b82f6' }}
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ strokeWidth: 2, fill: '#10b981' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowth;