import './App.css';
import Nav from "./companents/Nav";
import Men from "./companents/Men";
import styled from "styled-components";

function App() {
    return (
        <Wrapper>
            <Men/>
            <Nav/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  background-color: #856464;
  padding: 20px;
  gap: 20px
`;
