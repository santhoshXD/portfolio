import { createGlobalStyle } from "styled-components";
import Portfolio from "./components/Portfolio";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');

  body {
    font-family: 'Instrument Serif', serif;
    font-size: 1.3rem;
  }

  h2{
    font-weight: 600;
  }

 
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Portfolio />
    </div>
  );
}

export default App;
