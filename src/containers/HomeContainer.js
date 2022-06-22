import React from "react";
import styled from "styled-components";

const HomeCmpt = styled.div`
  width: 100%;
  height: 100%;
  background-color: azure;
  .header-container {
    width: 100%;
    height: 20%;
    background-color: #2e2e2e;
  }
  .body-container {
    width: 100%;
    height: 20%;
    background-color: #d4d7de;
  }
  .navigation-container {
    width: 100%;
    height: 20%;
    background-color: #2e2e2e;
  }
`;

const HomeContainer = () => {
  // 데이터 및 이벤트 핸들러는 Container에서 관리하고 components에는 props로 전달

  return (
    <HomeCmpt>
      <div className="header-container">Header</div>
      <div className="body-container">body</div>
      <div className="navigation-container">Navigation</div>
    </HomeCmpt>
  );
};

export default HomeContainer;
