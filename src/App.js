import { createGlobalStyle } from "styled-components";
// import "./App.css";
import HomePage from "./pages/HomePage";

const GlobalStyle = createGlobalStyle`
 html {
      width: 100vw;
      height: 100vh;
      body{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          div#root{
            width: 100%;
            height: 100%;
            /* background-color: aliceblue; */
          }
         
      } 
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
}

export default App;
