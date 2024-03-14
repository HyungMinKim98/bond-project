import React from 'react';
import { User } from './UserData';

interface BasicUserInfoProps {
  user: User;
}

const BasicUserInfo: React.FC<BasicUserInfoProps> = ({ user }) => {
  return (
    <div className="basic-user-info">
      <h2>기본 정보</h2>
      <p>유형: {user.userType === 'investor' ? '투자자' : '채무자'}</p>
      {user.liquidAssets && <p>유동 자산: ${user.liquidAssets}</p>}
      {user.userType === 'investor' && user.annualReturn && (
        <p>연간 수익률: {user.annualReturn}%</p>
      )}
      {user.userType === 'debtor' && user.annualRevenue && (
        <p>연간 수익: ${user.annualRevenue}</p>
      )}
    </div>
  );
};

export default BasicUserInfo;