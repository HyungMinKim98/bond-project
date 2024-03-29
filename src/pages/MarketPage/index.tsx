import React, { useEffect, useState } from 'react';
import { PieChart, Pie, BarChart, Bar, Tooltip, Legend, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './MarketPage.css'; // 필요한 경우 CSS 파일 경로를 확인해 주세요
interface BondData {
  id: number;
  name: string;
  annualYield: number;
  remainingInvestmentPeriod: number;
  openDate: string;
}

interface DemandRankData {
  sector: string;
  revenue: number;
}

const MarketPage = () => {
  const [bondData, setBondData] = useState<BondData[]>([]);
  const [demandRankData, setDemandRankData] = useState<DemandRankData[]>([]);

  useEffect(() => {
    // Fetch bond data from a local JSON file or an API endpoint
    fetch(process.env.PUBLIC_URL + '/BondData.json')
      .then((response) => response.json())
      .then((data) => setBondData(data))
      .catch((error) => console.error('Error fetching bond data:', error));

    // Simulate fetching demand rank data (replace URL with your API or local file)
    const demandRankDataExample = [
      { sector: 'Technology', revenue: 100000 },
      { sector: 'Finance', revenue: 80000 },
      // More data...
    ];
    setDemandRankData(demandRankDataExample);
  }, []);
  // console.log(bondData);

  return (
    <div className='chart-container'>
      <h2>시장 분석</h2>
    <div className='chart'>
    <br />
    <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie dataKey="percentage" isAnimationActive={false} data={bondData} cx="50%" cy="50%" outerRadius={100} fill="#B3EFFF" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <h3>비쥬얼 차트</h3>
    <div className='chart'>
    <br />
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={bondData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="annualYield" fill="#2196F3"/>
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* 수요자 랭크 섹션 */}
    <h3>수요자 랭크</h3>
    <div className="info-section">
      <ul>
        {demandRankData.map((rank, index) => (
          <li key={index}>{rank.sector}: ${rank.revenue}</li>
        ))}
      </ul>
    </div>
    {/* 현재 시장 채권 정보 섹션 */}
    <h3>현재 시장 채권 정보</h3>
    <div className="info-section">
      <ul>
        {bondData.map((bond, index) => (
          <li key={index}>
            {bond.name}: 연이율 {bond.annualYield}, 남은 투자 기간 {bond.remainingInvestmentPeriod}
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default MarketPage;
