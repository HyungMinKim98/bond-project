import React from 'react';

const Footer = () => (
  <footer style={{color: '#fff', backgroundColor: "#000", padding: "20px", marginTop: "20px"}}>

    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
    <div>
      <p>서울시 강남구 테헤란로 123 | 대표: 홍길동</p>
      <p>사업자등록번호: 123-45-67890 | 전화: 02-1234-5678</p>
      <p>Email: info@company.com</p>
    </div>
      <div>
        <h3>서비스</h3>
        <ul>
          <li><a href="/terms">이용약관</a></li>
          <li><a href="/privacy">개인정보 처리방침</a></li>
          <li><a href="/disclaimer">면책조항</a></li>
        </ul>
      </div>
      <div>
        <h3>소셜 미디어</h3>
        <ul>
          <li><a href="https://www.facebook.com/yourcompany">Facebook</a></li>
          <li><a href="https://www.twitter.com/yourcompany">Twitter</a></li>
          <li><a href="https://www.instagram.com/yourcompany">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div>
      <p>© 2024 회사명. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
