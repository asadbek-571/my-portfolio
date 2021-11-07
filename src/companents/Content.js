import React from 'react'
import styled from 'styled-components'
import Design from "./Design";
import education from "../svg/education.svg"
import work from "../svg/work.svg"
import Footer from "./Footer";
import Skills from "./Skills";

function Content() {

    let edu = [
        {
            key: 'PDP IT Academy (2021 - hozirgacha)',
            value: "Intensive bootcamp kurslarining web fullstack yo'nalishida"
        }, {
            key: 'Kasb hunar kolleji (2017 - 2019)',
            value: " Farg'ona viloyati Uchko'pirik tumani Kasb hunar kolleji, Yoqilg'i va energetika yo'nalishi"
        }
    ];
    let wor = [{
        key: 'Mavjud emas',
        value: ''
    }];
    return (
        <Wrapper>
            <About>
                <H4>Men haqimda</H4>
                <p>Assalomu alaykum! Men <b>Asadbek Kushakov</b>, 2001-yil 7-avgustda tug'ulganman.
                    O'zbekiston Respublikasining Farg'ona viloyati, Uchko'prik tumanida istiqomat qilaman.
                    2019-yili Farg'ona viloyati Uchko'prik tumanidagi <b>Kasb hunar kollejining </b>
                    yoqilg'i va energetika sohasi bo'yicha o'qishni tamomlaganman.
                    Yoshligimdan kompyuter elektronikaga qiziqishim sabab 2021-yil fevral oyida Toshkentdagi
                    <b> PDP IT Academyning </b>10 oylik intensive bootcamp kurslarining <b>Web Fullstack</b> yo'nalishi
                    bo'yicha o'qishni tamomladim.
                </p>
            </About>
            <Resume>
                <H4>Resume</H4>
                <EducationAndWork>
                    <Design
                        container={46}
                        title={"Ish tajribam"}
                        fontSize1={14}
                        fontSize2={13}
                        size={40}
                        width={50}
                        firstHeight={40}
                        height={100}
                        obj={wor}
                        src={work}
                    />
                    <Design
                        display={"flex"}
                        container={46}
                        title={"Ma'lumotim"}
                        fontSize1={14}
                        fontSize2={13}
                        size={40}
                        width={50}
                        // position={'relative'}
                        firstHeight={40}
                        height={20}
                        obj={edu}
                        src={education}
                    />

                </EducationAndWork>
            </Resume>
            <Skills h4={<H4>Skills </H4>}/>
            <Footer/>
        </Wrapper>
    )
}

export default Content

const EducationAndWork = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 120px 20px 20px 20px;
`;

const Wrapper = styled.div`
  padding: 115px 30px 0 30px;
  height: 94vh;
  border-radius: 5px;
  overflow: scroll;
  background: #f6f6f6;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-corner {
    display: none
  }

  ::-webkit-scrollbar-thumb {
    
    background: linear-gradient(transparent, #ffbe0f);
    border-radius: 5px;
  }
`;

const H4 = styled.h4`
  -webkit-box-shadow: -4px 4px 0px -2px #FFBE0F;
  box-shadow: -4px 4px 0px -2px #FFBE0F;
  max-width: 130px;
  padding: 3px;
  font-size: 18px;
  margin-bottom: 10px;
  width: 20%;
`;

const About = styled.div`
  p {
    font-size: smaller;
    line-height: 22px;
    text-align: justify;
    margin-bottom: 30px;
  }
`;

const Resume = styled.div``;