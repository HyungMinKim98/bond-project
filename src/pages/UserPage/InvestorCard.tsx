// InvestorCard.tsx
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { User, Investment } from './UserData';
import { COLORS } from './PieChartComponent';

interface InvestorCardProps {
  user: User;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <h3>Investor Information</h3>
      {user.investments && (
        <>
          {user.investments.map((investment: Investment, index: number) => (
            <p key={index}>{`${investment.type}: ${investment.percentage}% (${investment.count} units)`}</p>
          ))}
          <PieChart width={400} height={400}>
            <Pie
              dataKey="percentage"
              isAnimationActive={false}
              data={user.investments}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {user.investments.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </>
      )}
      <p>Annual Return: {user.annualReturn}%</p>
      <p>Liquid Assets: ${user.liquidAssets}</p>
    </div>
  );
};