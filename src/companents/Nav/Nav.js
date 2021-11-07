import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Link, Route,} from "react-router-dom";
import {ReactComponent as HomeSVG} from "../../svg/icons8-home.svg";
import  "./Nav.css";
import {ReactComponent as Git} from "../../svg/iconmonstr-github-1.svg";
import {ReactComponent as Instagram} from "../../svg/iconmonstr-instagram-11.svg";
import GoldButton from "../Button/GoldButton";
import Design from "../Design";
import Content from "../Content";


function About() {
    return null;
}

function Topics() {
    return null;
}

function Home() {
    return null;
}

function Switch(props) {
    return null;
}


function Nav() {

    // const [show, handleShow] = useState(false)
    // const transitionNavBar = () => {
    //     if (window.scrollY > 1) {
    //         handleShow(true)
    //     } else {
    //         handleShow(false)
    //     }
    // }
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', transitionNavBar)
    //     return () => window.removeEventListener('scroll', transitionNavBar)
    // }, [])

    return (
        < Router>
            <Wrapper className={"nav-black"}>
                <Link className="a" to={"/"}><span className={'span'}><HomeSVG/></span></Link>
                <Link className="a" to="/resume">Resume</Link>
                <Link className="a" to="/portfolio">Portfolio</Link>
                <Link className="a" to="/contact">Contact</Link>
                <MyLinks>
                    <Link to="https://github.com/asadbek-571" target={'_blank'}><span><Git/></span></Link>
                    <Link to="/#"><Instagram/></Link>
                    <GoldButton url={'/#'}
                                img={"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0\n" +
                                "                                iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyI+PHBhdGggaWQ9InRlbGVncmFtLTEiIGQ9Ik0xOC4zODQsMjIuNzc5YzAuMzIyLDAuMjI4IDAuNzM3LDAuMjg1IDEuMTA3LDAuMTQ1YzAuMzcsLTAuMTQxI\n" +
                                "                                DAuNjQyLC0wLjQ1NyAwLjcyNCwtMC44NGMwLjg2OSwtNC4wODQgMi45NzcsLTE0LjQyMSAzLjc2OCwtMTguMTM2YzAuMDYsLTAuMjggLTAuMDQsLTAuNTcxIC0wLjI2LC0wLjc1OGMtMC4yMiwtMC4xODcgLTAuNTI1LC0wLjI0MSAtMC43OTcsLTAuMTRjLTQuMTkzLDEuNTUyIC0xNy4xMDYsNi4zOTcgLTIyLjM4NCw4LjM1Yy0wLjMzNSwwLjEyNCAtMC41NTMsMC40NDYgLTAuNTQyLDAuNzk5YzAuMDEyLDAuMzU0IDAuMjUsMC42NjEgMC41OTMsMC43NjRjMi4zNjcsMC43MDg\n" +
                                "                                gNS40NzQsMS42OTMgNS40NzQsMS42OTNjMCwwIDEuNDUyLDQuMzg1IDIuMjA5LDYuNjE1YzAuMDk1LDAuMjggMC4zMTQsMC41IDAuNjAzLDAuNTc2YzAuMjg4LDAuMDc1IDAuNTk2LC0wLjAwNCAwLjgxMSwtMC4yMDdjMS4yMTYsLTEuMTQ4IDMuMDk2LC0yLjkyMyAzLjA5NiwtMi45MjNjMCwwIDMuNTcyLDIuNjE5IDUuNTk4LDQuMDYyWm0tMTEuMDEsLTguNjc3bDEuNjc5LDUuNTM4bDAuMzczLC0zLjUwN2MwLDAgNi40ODcsLTUuODUxIDEwLjE4NSwtOS4xODZjMC4xMDgsL\n" +
                                "                                TAuMDk4IDAuMTIzLC0wLjI2MiAwLjAzMywtMC4zNzdjLTAuMDg5LC0wLjExNSAtMC4yNTMsLTAuMTQyIC0wLjM3NiwtMC4wNjRjLTQuMjg2LDIuNzM3IC0xMS44OTQsNy41OTYgLTExLjg5NCw3LjU5NloiLz48L3N2Zz4="}
                                title={'Murojaat qilish'}/>
                </MyLinks>
            </Wrapper>
            <Switch>
                <Route path={'localhost:3000/portfolio'}>
                    <Design/>
                </Route>
                <Route path="/">
                    <Content/>
                </Route>
            </Switch>
        </Router>

    )
}

export default Nav



const MyLinks = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

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
      gap: 20px;

      :first-child {
        font-size: 14px;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
      }
    }

  }
`;


const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 17px;
  background: #f6f6f6;
  height: 50px;
  width: 56.5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  border-radius: 5px;
  overflow: hidden;

  .a {
    display: block;
    padding: 0 0.7rem 0 0;
    color: #282c34;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    font-family: sans-serif;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;

    .span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 50px;
      background: #ffbe0f;

      svg {
        height: 50%;
      }
    }
  }
`;