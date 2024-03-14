export interface Investment {
  type: string;
  percentage: number;
  count: number;
}

export interface User {
  userType: 'investor' | 'debtor' | 'general'; // 'general' 타입 추가
  investments?: Investment[];
  annualReturn?: number;
  liquidAssets?: number;
  dueDate?: string; // 채무자용 필드
  annualRevenue?: number; // 채무자용 필드
}

// Dummy data 예시입니다. 실제 데이터 연동시 이 부분은 대체됩니다.
export const usersData: User[] = [
  {
    userType: 'investor',
    investments: [{ type: 'Stocks', percentage: 50, count: 10 }],
    annualReturn: 5,
    liquidAssets: 10000,
  },
  {
    userType: 'debtor',
    dueDate: '2023-12-31',
    annualRevenue: 50000,
  },
  // 다른 사용자 데이터 추가...
];