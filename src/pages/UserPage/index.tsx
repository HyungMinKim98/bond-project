import React from 'react';
import { User, usersData } from './UserData';
import { InvestorCard } from './InvestorCard';
import DebtorCard from './DebtorCard';
import './UserPage.css';
import BasicUserInfo from './BasicUserInfo';

// DebtorCard도 비슷한 방식으로 import

const UserPage: React.FC = () => {
    // Attempt to find an investor
    const investor = usersData.find(user => user.userType === 'investor');
    // Attempt to find a debtor
    const debtor = usersData.find(user => user.userType === 'debtor');
    
    // Determine the user to display based on the found data
    let currentUser: User | undefined;
    let userComponent;
  
    if (investor) {
      currentUser = investor;
      userComponent = <InvestorCard user={currentUser} />;
    } else if (debtor) {
      currentUser = debtor;
      userComponent = <DebtorCard user={currentUser} />;
    } else {
      // Handle the general user case
      currentUser = undefined; // Or some default general user data
      userComponent = <div>General User Information</div>;
    }
  
    if (!currentUser) {
      return <div>User not found</div>;
    }

  return (
    <div className="user-container">
      <h1>User Page</h1>
      <BasicUserInfo user={currentUser} />
      <div className="user-cards-container">
        {currentUser.userType === 'investor' ? (
          <InvestorCard user={currentUser} />
        ) : (
          <DebtorCard user={currentUser} /> 
        )}
      </div>
    </div>
  );
};

export default UserPage;