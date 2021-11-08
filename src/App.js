import './App.css';
import Nav from "./companents/Nav/Nav";
import Owner from "./companents/Ovner/Owner";
import styled from "styled-components";
import Content from "./companents/Content";
import {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {

    useEffect(()=>{
        AOS.init({
            duration: 1200,
        })
    },[])
    return (
        <Wrapper>
            <Owner />
            <FlexDisplay >
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


