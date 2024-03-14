import React, { useState } from 'react';
import './LoginPage.css'; // 필요한 경우 CSS 파일 경로를 확인해 주세요

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log(email, password, rememberMe);
    // 로그인 로직 구현
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="col-md-7">
        <div className="login-box">
          <h3 className="login-title">Login</h3>
          <p className="login-subtitle">P2P 플랫폼 000입니다.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                id="email"
                className="form-control" 
                type="email" 
                placeholder="이메일"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                className="form-control" 
                type="password" 
                placeholder="비밀번호"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="form-check">
              <input
                id="rememberMe"
                type="checkbox"
                className="form-check-input"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                아이디 저장
              </label>
              
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
            <div className="login-footer text-center">
              <a href="#">아이디 찾기 | </a> <a href="#">비밀번호 찾기</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default LoginPage;
