import React from 'react';
import { BsBank2 } from "react-icons/bs";
import moneyImage from './money.jpg';
import './MainPage.css'; // 필요한 경우 CSS 파일 경로를 확인해 주세요


// 필요한 경우 employee-dashboard.css를 import합니다.
const MainPage = () => {
  return (
    <div className="dashboard-container">
      {/* 대시보드 상단 네비게이션 바 */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* 네비게이션 바 내용 */}
      </nav>

      {/* 대시보드 콘텐츠 */}
      <div className="container-fluid">
        <div className="row">
          {/* 사이드바 메뉴 */}
          <div className="col-md-3">
            {/* 사이드바 내용 */}
          </div>
          
          {/* 메인 콘텐츠 영역 */}
          <div className="col-md-7">
          <h2 className="mb-4">현재 모집 중인 채권</h2>
            <div className="card">
              <img src={moneyImage} className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title<BsBank2 /></h5>         
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-light">투자하기</a>
                {/* 이곳에 현재 모집 중인 채권 정보를 표시합니다. */}

              </div>
            </div>
            <h2 className="mb-4">사람들이 많이 보고 있는 채권</h2>
            <div className="card">
              <img src={moneyImage} className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-light">투자하기</a>
                {/* 이곳에 현재 모집 중인 채권 정보를 표시합니다. */}

              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default MainPage;
