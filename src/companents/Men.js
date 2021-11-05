import React from 'react'
import styled from 'styled-components'
import men from '../img/ovner.png'
import logo from '../img/logatip.png'

const obj = [
    {
        title: 'Ism Familya:',
        value: "Asadbek Kushakov",
    }, {
        title: "Tug'ulgan sana:",
        value: "07.08.2001",
    },
    {
        title: 'Tel:',
        value: "+998 97 949 77 71",
    },
    {
        title: 'E-mail: ',
        value: "kushakovasadbek@gmail.com",
    }
]

function Men() {
    return (
        <Wrapper>
            <Img>
                <img className={"owner"} src={men} alt="men"/>

                <LogoBox>
                    <img className="logo" src={logo} alt="logo"/>
                </LogoBox>
            </Img>
            <Data>
                <Design>
                    {obj.map((value, index) => {
                        return (
                            <>
                                <Line className={index === 0 && 'first'} key={index}/>
                                <Title>
                                    <Circle key={index}/>
                                    <Span1>{value.title}</Span1>
                                    <Span2>{value.value}</Span2>
                                </Title>
                            </>
                        )
                    })}
                </Design>
            </Data>
        </Wrapper>
    )
}

export default Men

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;

const Design = styled.div`

  .first {
    height: 30px;
  }
`;

const Circle = styled.span`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #fff;
  border: 3px solid #ffbe0f;

`;

const Line = styled.div`
  height: 20px;
  width: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  background-color:rgba(140,151,154,0.26666666666666666);
  border-radius: 3px;
`;

const Data = styled.div`
  height: 30%;
  background-color: transparent;
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const Span1 = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: #212529;
  font-family: "Roboto", sans-serif;
`;

const Span2 = styled.span`
  margin-left: 3px;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 85vh;
  position: relative;
  background: #F6F6F6;
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

const LogoBox = styled.div`
  width: 50px;
  overflow: hidden;
  position: absolute;
  left: 15px;
  bottom: 10px;
  border-radius: 50%;
  //background: linear-gradient(rgb(237, 105, 60), rgb(253, 198, 11));
  background: rgba(140,151,154,0.26666666666666666);

  img {
    width: 100%;
    filter: drop-shadow(0 0 5px #3b3a3a);
  }
`;

