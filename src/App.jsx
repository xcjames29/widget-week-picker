import { useState } from "react";
import styled from "styled-components"


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #972097;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CalendarContainer = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 30px 10px;
    background-color: whitesmoke;
    display: flex;
    gap: 20px;
    align-items: center;
    border-radius: 5px;

`;

const ButtonContainer = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a1a1a1;
    border-radius: 50%;
    cursor: pointer;
    :hover div{
        background-color: red;
    }
`;

const ButtonCircle = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #5f5c5c;
    cursor: pointer;
`
const DatesText = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #383838;
    opacity: ${props=>props.selected?"1":"0.5"};
`
export default function App(){
    let [week,setWeek] = useState([Date.now()-(86400000*3),Date.now()-(86400000*2),Date.now()-(86400000), Date.now(), Date.now()+(86400000),Date.now()+(86400000*2),Date.now()+(86400000*3)])
    let [nextDate, setNextDate] = useState(Date.now()+(86400000*3));
    let [prevDate , setPrevDate] = useState(Date.now()-(86400000*3));
    let prev = ()=>{
        let newWeek = [prevDate-(86400000*7) ,prevDate-(86400000*6), prevDate-(86400000*5), prevDate-(86400000*4), prevDate-(86400000*3), prevDate-(86400000*2),prevDate-(86400000)  ]
        setNextDate(newWeek[6]);
        setPrevDate(newWeek[0]);
        setWeek(newWeek);
    }
    
    let next = ()=>{
        let newWeek = [nextDate+(86400000) ,nextDate+(86400000*2), nextDate+(86400000*3), nextDate+(86400000*4), nextDate+(86400000*5), nextDate+(86400000*6), nextDate+(86400000*7)  ]
        setNextDate(newWeek[6]);
        setPrevDate(newWeek[0]);
        setWeek(newWeek);
    }
    return(
        <Container>
            <CalendarContainer>
                <ButtonContainer onClick ={()=>prev()}>
                   <ButtonCircle />
                </ButtonContainer>
                {
                    week.map(e=>{
                        let textDate = new Date(e).toDateString();
                        let sub = textDate.substr(3,textDate.length-7)
                        let current = new Date(Date.now()).toDateString();
                        let subDate = current.substr(3,textDate.length-7);
                       return <DatesText selected={sub === subDate}>{ sub}</DatesText>
                    })
                }
                 <ButtonContainer onClick ={()=>next()}>
                   <ButtonCircle />
                </ButtonContainer>
            </CalendarContainer>
        </Container>
    )
}