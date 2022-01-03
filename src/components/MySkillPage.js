import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import styled from 'styled-components'
import { Design,Developer, PowerBtn} from './AllSvags'
import LogoComponents from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import { ParticalComponent } from '../subComponents/ParticalComponent'
import BigTitlte from '../subComponents/BigTitlte'

const Box=styled.div` 
background-color:${props=>props.theme.body};
width:100vw;
height:100vh;
position:relative;
display:flex;

justify-content:space-evenly;
align-items:center;


` 

const Main=styled.div` 
border:2px solid ${props=>props.theme.text};
color:${props=>props.theme.text};
background-color:${props=>props.theme.body};
padding:2rem;
width :30vw;
height:60vh;
z-index:3;
line-height:1.5;
font-family:'Ubuntu Mono',monospace;
dispaly:flex;
flex-direaction:column;
font-size:calc(0.7em + 1vw);
justify-content:space-between;
cursor:pointer;


:hover{
    color:${props=>props.theme.body};
    background-color:${props=>props.theme.text};

}

` 

//${Main} is optional

const Title=styled.h2` 
display:flex;
justify-content:center;
align-items:center;
font-size:calc(1em + 1vw);

${Main}:hover{
    
      color:${props=>props.theme.body};
    
}

&>*:first-child{
  margin-right:1rem;  
}
` 
const Description =styled.div`


color:${props=>props.theme.text};
font-size:calc(0.6em + 0.6vw);
padding:0.5rem 0;



${Main}:hover &{
    
      color:${props=>props.theme.body};

}

strong{
    margin-bottom:1rem;
    text-transform:uppercase;

}




` 




const MySkillPage = () => {
    return (
        
        
        <ThemeProvider theme={lightTheme}>

<Box>
<LogoComponents theme='light'/>
<SocialIcons theme='light'/>
<PowerButton/>
<ParticalComponent theme='light'/>
<Main>
<Title>
<Design width={40} height ={40}/>
  Designer
  </Title>

<Description>
As I love art.I love to create design which creative, attrative, clean and speaks for itself . 
</Description>
<Description>
    <strong>I LIKE TO DESIGN : </strong>
    <ul>
        <li>
            Web Design 
        </li>
        <li>
            Mobile Apps 
        </li>
    </ul>
    <br/>
    <strong>I LIKE TO DESIGN : </strong>
    <ul><li>
    Figma
    
        </li>
        <li>
           Photoshop
        </li></ul>
    

</Description>



</Main>
<Main>
<Title>
<Developer width ={40} height ={40}/>
Developer
</Title>
<Description>
As a developer, I  value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
</Description>
<Description>
<strong>SKILLS : </strong>
    <ul>
        <li>
        Html, Css, JavaScript, React
        </li>
        <li>
        PHP, Node.js,MySQL
        </li>
        <li>
        WordPress,Bootstrap, Asp.Net, Azure,
        </li>
    </ul>
</Description>




</Main>


</Box> 
        </ThemeProvider>  
       
    )
}

export default MySkillPage
