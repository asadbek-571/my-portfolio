import React from 'react'
import styled from 'styled-components'
import reactLogo from '../img/Без названия.png'

function Footer() {
    return (
        <Wrapper>
            <div><h3>Asadbek Kushakov</h3></div>
            <div>
                <p>© 2021 React texnologiyasi yordamida yaratilgan <span><img src={reactLogo}
                                                                       alt=""/></span> Dizayner va Dasturchi
                    Аsadbek Kushakov
                </p>
            </div>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
  background-color: #f6f6f6;
  bottom: 10px;
  padding: 40px 0 0 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
p{
  display: flex;
  justify-content:center;
  align-items: center;
}
  h3, p {
    font-size: 12px;

    span {
      display: inline-block;
      padding: 2px;
      width: 20px;
      height: 20px;

      img {
        width: 100%;
      }

    }
  }
`;