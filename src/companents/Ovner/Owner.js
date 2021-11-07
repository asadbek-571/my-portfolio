import React from 'react'
import styled from 'styled-components'
import men from '../../img/ovner.png'
import logo from '../../img/logatip.png'
import GoldButton from "../Button/GoldButton";
import Design from "../Design";
import {BrowserRouter as Router} from "react-router-dom";
const obj = [
    {
        key: 'Ism Familya:',
        value: "Asadbek Kushakov",
    }, {
        key: "Tug'ulgan sana:",
        value: "07.08.2001",
    },
    {
        key: 'Tel:',
        value: "+998 97 949 77 71",
    },
    {
        key: 'E-mail: ',
        value: "kushakovasadbek@gmail.com",
    }
]

function Owner() {
    return (
        <Wrapper>
            <Img>
                <img className={"owner"} src={men} alt="men"/>
            </Img>
            <Data>
                <Design
                    container={100}
                    position={'relative'}
                    fontSize1={12}
                    fontSize2={12}
                    size={50}
                    width={100}
                    firstHeight={40}
                    height={20}
                    obj={obj}
                    src={logo}
                />
                <Router>
                <GoldButton url="#"
                            img={"https://www.svgrepo.com/show/115243/download-arrow.svg"}
                            title={'CV ni yuklab olish'}/>
                </Router>
            </Data>
        </Wrapper>
    )
}

export default Owner


const Data = styled.div`
  height: 40%;
  background-color: transparent;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap:30px
`;


const Wrapper = styled.div`
  width: 300px;
  height: 94vh;
  position: relative;
  overflow: hidden;
  background: #F6F6F6;
  border-radius: 5px;
  //background: linear-gradient(rgb(6, 85, 163), rgb(33, 179, 228));
  //background: linear-gradient(rgb(237, 105, 60), rgb(253, 198, 11));
`;

const Img = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  
  .owner {
    width: 100%;
    border-bottom-left-radius: 30%;
  }
`;

