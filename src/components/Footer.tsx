import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // CSS 파일을 import 합니다.

const Footer = () => (
  <footer style={{color: '#fff', backgroundColor: "#000", padding: "20px", marginTop: "20px"}}>

    <div className="footer-container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
      <div className="footer-section">
        <p>서울시 강남구 테헤란로 123 | 대표: 홍길동</p>
        <p>사업자등록번호: 123-45-67890 | 전화: 02-1234-5678</p>
        <p>Email: info@company.com</p>
        <p>© 2024 회사명. All rights reserved.</p>
      </div>
      <div className="footer-section">
        <h3>서비스</h3>
        <ul>
          <li><a href="/terms">이용약관</a></li>
          <li><a href="/privacy">개인정보 처리방침</a></li>
          <li><a href="/disclaimer">면책조항</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>소셜 미디어</h3>
        <ul>
          <li><a href="https://www.facebook.com/yourcompany"><FaFacebook /> Facebook</a></li>
          <li><a href="https://www.twitter.com/yourcompany"><FaTwitter /> Twitter</a></li>
          <li><a href="https://www.instagram.com/yourcompany"><FaInstagram /> Instagram</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
