import React from 'react';
import { User } from './UserData';

interface DebtorCardProps {
  user: User;
}

const DebtorCard: React.FC<DebtorCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <h3>Debtor Information</h3>
      <p>Due Date: {user.dueDate}</p>
      <p>Annual Revenue: ${user.annualRevenue}</p>
      {/* 필요한 경우 추가 정보 렌더링 */}
    </div>
  );
};

export default DebtorCard;