import React from "react";
import styled from "styled-components";

const HeaderCmpt = styled.div`
  width: 100%;
  height: 100%;
  .left {
    width: 100%;
    height: 50%;
  }
  .right {
    width: 100%;
    height: 50%;
  }
`;

const Header = () => {
  return (
    <HeaderCmpt className="header-component">
      <div className="left">도봉산-옥정 광역철도 3공구</div>
      <div className="right">로그아웃 버튼</div>
    </HeaderCmpt>
  );
};

export default Header;
