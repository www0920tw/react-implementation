import React from 'react';

const Header = props => (
  <div className="header">
    <div className="grid">
      <div className="start">
        <a href="/">首頁</a>
      </div>
      <div className="end">
        {props.nickname ? (
          <span className="nickname">
            <i className="far fa-user"></i>
            {props.nickname}
          </span>
        ) : (
          // <React.Fragment></React.Fragment> 可以使用简写 <></>
          <React.Fragment>
            <a href="/">登錄</a>
            <a href="/">註冊</a>
          </React.Fragment>
        )}
      </div>
    </div>
  </div>
);

export default Header;
