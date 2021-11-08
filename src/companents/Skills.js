import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Java} from "../svg/skills/java-icon.svg";
import {ReactComponent as JS} from "../svg/skills/javascript.svg";
import {ReactComponent as JQuery} from "../svg/skills/jquery.svg";
import {ReactComponent as Html} from "../svg/skills/html-5.svg";
import {ReactComponent as Css} from "../svg/skills/css3.svg";
import {ReactComponent as Bootstrap} from "../svg/skills/bootstrap.svg";
import {ReactComponent as Spring} from "../svg/skills/spring.svg";
import {ReactComponent as Docker} from "../svg/skills/docker.svg";
import {ReactComponent as Rabbitmq} from "../svg/skills/rabbitmq-icon.svg";
import {ReactComponent as Firebase} from "../svg/skills/firebase.svg";
import {ReactComponent as Postman} from "../svg/skills/postman.svg";
import {ReactComponent as MaterialUI} from "../svg/skills/material-ui.svg";
import {ReactComponent as PostgreSQl} from "../svg/skills/postgresql-icon.svg";
import {ReactComponent as ReactIcon} from "../svg/skills/reactjs-icon.svg";
import {ReactComponent as Redux} from "../svg/skills/redux.svg";
import {ReactComponent as Sass} from "../svg/skills/sass.svg";
import './Skills.css'

const obj = [

    {
        key: "Java",
        value: <Java/>
    }, {
        key: "PostgreSQl",
        value: <PostgreSQl/>
    }, {
        key: "Spring Boot",
        value: <Spring/>
    }, {
        key: "Docker",
        value: <Docker/>
    }, {
        key: "RabbitMQ",
        value: <Rabbitmq/>
    }, {
        key: "Postman",
        value: <Postman/>
    }, {
        key: "HTML",
        value: <Html/>
    }, {
        key: "CSS",
        value: <Css/>
    },
    {
        key: "Sass",
        value: <Sass/>
    },
    {
        key: "Bootstrap",
        value: <Bootstrap/>
    },
    {
        key: "JavaScript",
        value: <JS/>
    }, {
        key: "JQuery",
        value: <JQuery/>
    }, {
        key: "React",
        value: <ReactIcon/>
    },
    {
        key: "MaterialUI",
        value: <MaterialUI/>
    }, {
        key: "Redux",
        value: <Redux/>
    },
    {
        key: "Firebase",
        value: <Firebase/>
    }

]



function Skills(props) {
    return (
        <Wrapper>
            {props.h4}
            <SvgIcons>
                <div id="dock-container">
                    <div id="dock">
                        <ul>
                            {
                                obj.map((value, index) => {
                                    return (
                                        <li key={index}>
                                            <span>{value.key}</span>
                                            {value.value}
                                        </li>

                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </SvgIcons>
        </Wrapper>
    )
}

export default Skills

const Wrapper = styled.div`
`;
const SvgIcons = styled.div`
  padding: 70px 0 50px 0;
  width: 100%;
`;

