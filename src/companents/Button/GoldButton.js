import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
// import './Button.css'
function GoldButton(props) {
    return (
        <Wrapper>
            <Link to={props.url}>
                <div>
                    <span>{props.title}</span>
                    <span>
                        <Circle>
                             <img src={props.img} alt={props.alt}/>
                        </Circle>
                       </span>
                </div>
            </Link>
        </Wrapper>

    )
}

export default GoldButton

const Wrapper = styled.div`
  
  
  
  a {
    margin-left: 5px;
    margin-right: 5px;
    text-decoration: none;
    color: #212529;

    div {
      width: 170px;
      height: 40px;
      border-radius: 20px;
      background-color: #ffbe0f;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7px;

      
      
      
      :first-child {

        font-size: 14px;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
      }

      :last-child {
        img {
          width: 15px;
          height: 15px
        }
      }
    }
  }
`;

const Circle = styled.span`
  display:flex;
  justify-content:center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color:#f6f6f6;
`;
