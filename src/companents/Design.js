import styled from 'styled-components'
import './Design.css'

function Design(props) {
    return (
        <div
            style={{
                marginTop: "-100px",
                width: `${props.container}%`
            }}
        >
            <UL>
                <li style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div className={'img--box'} style={{
                        position: props.position,
                        width: props.size,
                        height: props.size,
                    }}>
                        <img
                            style={{
                                width: `${props.width}%`,
                                filter: "drop-shadow(0 0 2px #3b3a3a)",
                            }}
                            src={props.src} alt=""/>

                    </div>
                    <h3
                        style={{
                            fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
                            marginLeft: 20
                        }}
                    >
                        {props.title}
                    </h3>
                </li>
                {props.obj.map((value, index) => {
                    let count=100;
                    return (
                        <div
                            data-aos="fade-up"
                            // data-aos-anchor-placement="center-center"
                            data-aos-easing="linear"
                            data-aos-duration={count}
                        >
                            <li style={{marginLeft: 5, width: `90%`}}>
                                <div

                                    className={'line'}
                                    style={{
                                        height: index === 0 ? props.firstHeight : props.height,
                                        position: props.position,
                                    }}/>
                            </li>
                            <Info>
                                <Circle/>
                                <div style={{width: "90%"}}>
                                    <span
                                        style={{
                                            display: props.display,
                                            fontSize: props.fontSize1,
                                            fontWeight: "bold",
                                            marginRight: 4
                                        }}
                                    >
                                            {value.key}
                                    </span>
                                    <span>{value.value.title}</span>
                                    <span
                                        style={{fontSize: props.fontSize2}}
                                    >
                                            {value.value}
                                    </span>
                                </div>
                            </Info>
                        </div>
                    )
                })
                }
            </UL>
        </div>
    )
}

export default Design


const UL = styled.ul`
  list-style: none;
`;

const Info = styled.li`
  display: flex;
  
  padding: 5px 5px 5px 0;
  outline-style: none;
  text-transform: none;
`;

const Circle = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 3px solid #ffbe0f;
`;
