import './App.css';
import Nav from "./companents/Nav/Nav";
import Owner from "./companents/Ovner/Owner";
import styled from "styled-components";
import Content from "./companents/Content";
function App() {
    return (
        <Wrapper>
            <Owner/>
            <FlexDisplay>
                <Nav/>
                <Content/>
            </FlexDisplay>
        </Wrapper>

    );
}

export default App;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  //background-color: #856464;
  padding: 20px;
  gap: 20px
`;

const FlexDisplay = styled.div`
  max-width: 70%;
  //transform: translateY(100px);
`;


