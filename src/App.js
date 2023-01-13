import './App.css';
import styled from 'styled-components';
import Capak from './Capak.js';

function App() {
  return (
    <Main>
      <Header>
        <h1>Cápák</h1>
      </Header>
      <h1>Cápák és ráják</h1>
      <Capak />
      <Footer>Cápák és ráják</Footer>
    </Main>
  );
}

const Main = styled.main`
  width: 90%;
  margin: 0 auto 100px auto;
  h1 {
    text-align: center;
    font-size: 60px;
}
`
const Header = styled.header`
  height: 80px;
  background-color: rgb(55, 50, 209);
  color: white;
  h1 {
    text-align: left;
    font-size: 60px;
}
`

const Footer = styled.footer`   
  margin: 0;
  padding: 15px; 
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 18px;
  color: white;
  background-color: rgb(55, 50, 209);
  text-align: center;
`

export default App;
