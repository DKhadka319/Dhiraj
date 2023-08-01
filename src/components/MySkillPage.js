import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import styled from 'styled-components'
import { Design, Developer, PowerBtn } from './AllSvags'
import LogoComponents from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import { DarkTheme } from '../components/Themes'
import { ParticalComponent } from '../subComponents/ParticalComponent'
import BigTitlte from '../subComponents/BigTitlte'

const Box = styled.div` 
background-color:${props => props.theme.body};
width:100vw;
height:100vh;
position:relative;
display:flex;

justify-content:space-evenly;
align-items:center;


`

const Main = styled.div` 
border:2px solid ${props => props.theme.text};
color:${props => props.theme.text};
background-color:${props => props.theme.body};
padding:2rem;
width :30vw;
height:60vh;
z-index:3;
line-height:1.5;
font-family:'Ubuntu Mono',monospace;
dispaly:flex;
flex-direaction:column;
font-size:calc(0.7em + 0.5vw);
justify-content:space-between;
cursor:pointer;
${'' /* overflow: scroll; */}




:hover{
    color:${props => props.theme.body};
    background-color:${props => props.theme.text};

}

`





//${Main} is optional

const Title = styled.h2` 
display:flex;
justify-content:center;
align-items:center;
font-size:calc(1em + 1vw);

${Main}:hover{
    
      color:${props => props.theme.body};
    
}

&>*:first-child{
  margin-right:1rem;  
}
`
const Description = styled.div`


color:${props => props.theme.text};
font-size:calc(0.6em + 0.6vw);
padding:0.5rem 0;



${Main}:hover &{
    
      color:${props => props.theme.body};

}


strong{
    margin-bottom:1rem;
    text-transform:uppercase;

}




`





const MySkillPage = (props) => {
    return (


        <ThemeProvider theme={lightTheme}>

            <Box>
                <LogoComponents theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticalComponent theme='light' />
                <Main>

                    {/* Designer  */}
                    <Title>
                    
                        <Design   width={40} height={40}  />
                        Designer
                    </Title>




                  {/* <Title>
                    
                    <Design  style={{color:'inherit'}} width={40} height={40} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                    Designer
                </Title>


 */}







                    <Description>
                    I have a great love for art.
                     My goal is to create a design that is
                      creative, attractive, clean, and speaks for itself 
                    </Description>
                    <Description>
                        <strong>I LIKE TO DESIGN : </strong>
                        <ul>
                            <li>
                                Web Application
                            </li>
                            <li>
                                Mobile Apps
                            </li>
                        </ul>
                        <br />
                        <strong>Tools </strong>
                        <ul>
                            <li>
                                Figma,Adobe XD,Canva
                             
                            </li>
                            <li>
                                Photoshop,Adobe Creative Cloud,InDesign,Power Director, After Effects
                            </li>
                        </ul>


                    </Description>

                </Main>
                {/* Developer  */}
                <Main>
                    <Title>
                        <Developer width={40} height={40} />
                        Developer
                    </Title>
                    <Description>
                     As a developer, 
                    I appreciate how it adds value
                     to the business and makes life more convenient.
                      Bringing new ideas to life is one of my favorite things to do.
                    </Description>
                    <Description>
                    <strong>I LIKE TO DEVELOP : </strong>
                        <ul>
                            <li>
                                Web Application
                            </li>
                            <li>
                                Mobile Apps
                            </li>
                            <li>
                               Software 
                            </li>
                        </ul><br></br>

                        <strong>SKILLS : </strong>
                        <ul>
                            <li> HTML, CSS, JavaScript, SASS, React </li>
                            <li> Bootstrap, REST API, UI Kit</li>
                            <li>Core.js, jQuery, GSAP,Tailwind</li> 
                            <li>PHP, Laravel, Nodejs, MySQL, C#, ASP.NET </li> 
                            <li>AWS, GitHub,WordPress,Shopify, Webpack, SQL Server </li> 
                        
                        </ul>
                    </Description>




                </Main>


            </Box>
        </ThemeProvider>

    )
}

export default MySkillPage
