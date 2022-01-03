import React from 'react'
import styled, {keyframes, ThemeProvider } from 'styled-components'



import { DarkTheme } from './Themes'
import LogoComponents from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import { ParticalComponent } from '../subComponents/ParticalComponent'

import BigTitlte from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'
const Box=styled.div` 
background-color:${props=>props.theme.body};
width:100vw;
height:100vh;
position:relative;
overflow:hidden;

` 
const float= keyframes `

0%{transform:translateY(-10px)}
50%{transform:translateY(15px) transitionX(15px)}
100%{transform:translateY(-10px)}
`

const Spaceman =styled.div`

position:absolute;

top:10%;
right:5%;
width:20vw;
animation:${float} 4s ease infinite;


 img{
    width:100%;
    height:auto;
}

`

const Main = styled.div`
border: 2px solid ${(props) => props.theme.text};
color:${props =>props.theme.text};
padding:2rem;
width:50vw;
height:63vh;
z-index:3;
line-height:1.5;
position:absolute;

justify-content:center;
align-items:center;
font-size:calc(0.6rem + 1vw);
backdrop:filter:blur(4px);
display:float;
left:calc(5rem + 5vw);
top:10rem;
font-family:'Ubuntu Mono',monospace;
font-style:italic;

a{
    position:relative;
    color:rgba(252, 246, 244, 0.6);
    
}





`





const AboutPage = () => {
    return (
        
        
        <ThemeProvider theme={DarkTheme}>

<Box>
<LogoComponents theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton/>
<ParticalComponent theme='dark'/>

<Spaceman>
   
    <img  src={astronaut} alt="spaceman"></img>
</Spaceman>
<Main>
I'm a front-end developer located in Sydney .
 "I love to create simple yet beautiful websites with great user experience.
<br/><br/>
I'm interested in the whole frontend stack. Like 
trying new things and building great projects. I'm an 
independent freelancer. I love making art and learn new things.
<br/><br/>
I believe  in developing meaningful and beautiful website.
<a href="mailto:dhirajkhadka99@gmail.com">
 Let's make something special together.</a>



</Main>
    <BigTitlte text="ABOUT"  top="10%" left="5%"  />
        
</Box> 
        </ThemeProvider> 
       
    )
}

export default AboutPage



