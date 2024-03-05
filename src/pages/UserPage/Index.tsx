import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './UserPage.css'; // Ensure this path matches your file structure
import usersData from './UserData.json';

// Example data, potentially imported from a JSON file
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const UserPage = () => {
  // Assuming usersData is an array of user objects
  const currentUser = usersData.find(user => user.userType === 'investor');

  // Ensure currentUser is defined before trying to access its properties
  if (!currentUser) {
    return <div>User not found</div>; // Or any other fallback UI
  }
  return (
    <div className="user-container">
      <h1> User Page</h1>
      <div className="user-cards-container">
      {currentUser.userType === 'investor' ? (
       <div className="user-card">
       <h3>Investor Information</h3>
       {currentUser.investments && (
         <>
           {currentUser.investments.map((investment, index) => (
             <p key={index}>{`${investment.type}: ${investment.percentage}% (${investment.count} units)`}</p>
           ))}
           <PieChart width={400} height={400}>
             <Pie
               dataKey="percentage"
               isAnimationActive={false}
               data={currentUser.investments}
               cx={200}
               cy={200}
               outerRadius={80}
               fill="#8884d8"
               label
             >
               {currentUser.investments.map((entry, index) => (
                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
               ))}
             </Pie>
           </PieChart>
         </>
       )}
       <p>Annual Return: {currentUser.annualReturn}%</p>
       <p>Liquid Assets: ${currentUser.liquidAssets}</p>
     </div>
      ) : (
        <div className="user-card">
          <h3>Debtor Information</h3>
          <p>Due Date: {currentUser.dueDate}</p>
          <p>Annual Revenue: ${currentUser.annualRevenue}</p>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="percentage"
              isAnimationActive={false}
              data={currentUser.investments ?? []} // Fallback to an empty array if `investments` is undefined
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {currentUser.investments?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
       </div>
      )}
    </div>
  </div>

  );
};

export default UserPage;
