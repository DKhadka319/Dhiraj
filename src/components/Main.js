import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import LogoComponents from '../subComponents/LogoComponents'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'
import { motion } from 'framer-motion'


//Contact ,blog 






//for YinYang 
import { YinYang } from './AllSvags'



const MainContainer =styled.div`
background:${props=> props.theme.body };
width:100vw;
height:100vh;
overflow:hidden;
position:relative;
h2,h3,h4,h5,h6{
    font-family:'Karla',sans-serif;
    font-weight:500;

}
`

const section =styled.div`
padding:2rem;

`

// Start  Contact  Css

const Contact=styled(NavLink)`
color:${props=>props.theme.text};
position:absolute;
top:2rem;
right:2rem;
text-decoration:none;
z-index:1;
`
const BLOG=styled(NavLink)`
color:${props=>props.theme.text};
position:absolute;
top:50%;
transform:rotate(90deg) translate(-50%,-50%);
right:2rem;
/*--right:cal(1rem+2vm);--*/
text-decoration:none;
z-index:1;

`

const WORK=styled(NavLink)`

color:${props=>props.click ? props.theme.body: props.theme.text};
position:absolute;
top:45%;
transform:rotate(-90deg) translate(-50%,-50%);

left:2rem;
/*--right:cal(1rem+2vm);--*/
text-decoration:none;
z-index:1;

`
//bottom section start 

const BottomBar=styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;
display:flex;
justify-content:space-evenly;


`
const ABOUT=styled(NavLink)`

color:${props=>props.click ? props.theme.body: props.theme.text};
text-decoration:none;
z-index:1;
text-shadow:1px 1px 1px  rgba(0, 0, 0, 0.3);


`
const SKILLS=styled(NavLink)`
color:${props=>props.theme.text};
text-decoration:none;
z-index:7;

`
//bottom sectioin end 
// Finish 

// Start  Center YinTang 
const rotate=keyframes`

from{
    transform:rotate(0);
}
to{
    transform:rotate(360deg);
}
`



const Center=styled.button`
position:absolute;
top:${props=>props.click ? '85%' :'50%'};
left:${props=>props.click ? '92%' :'50%'};
transform:translate(-50%,-50%);
border:none;
outline:none;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#FCF6F4;
transition:all 1s ease;

&>:first-child{
animation: ${rotate} infinite 2s linear;
}
&>:last-child{
    /*--
    no need  for now 
    display:${props=>props.click ? 'none' :'inline-block'};--*/
    padding-top:0;

}

`


//Start DarkDiv style 


const DarkDiv= styled.div`
position:absolute;
top:0;
background-color:#000;
bottom:0;
right:50%;
width:${props=>props.click ? '50%' :'0%'};
height:${props=>props.click ? '100%' :'0%'};
z-index:1;
transition:height 0.5s ease, width 1s ease 0.5s;


`

 const Main = () => {
     const [click, setClick] = useState(false);
   
     const handleClick =()=>setClick(!click);
    return (
        <MainContainer>

        <DarkDiv click={click}/>
        <section>
        <PowerButton/>
        <LogoComponents theme={click ? 'dark' :'light'}/>
        <SocialIcons  theme={click ? 'dark' :'light'}/>
        


        <Center click={click}>

        <YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 :200}  fill='currentColor'
            
        />
        <span>Click</span>
        </Center>


        <Contact  target="_blank" to={{pathname:"mailto:dhirajkhadka99@gmail.com"}}>

           <motion.h2
           initial={{
               y:-200,
               transition:{type:'spring' ,duration:1.2,delay:1}
               }}
               animate={{
                   y:0,
              transition:{type:'spring' ,duration:1.2,delay:1}
               }}
           
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           >
               Contact.
           </motion.h2> 
        </Contact>

    <BLOG to="/skills">

           <motion.h2
           initial={{
               y:-200,
               transition:{type:'spring' ,duration:1.2,delay:1}
               }}
               animate={{
                   y:0,
              transition:{type:'spring' ,duration:1.2,delay:1}
               }}
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}>
                Skills
           </motion.h2> 
        </BLOG>

        <WORK  to={"/work"} click={click} >

           <motion.h2
           initial={{
               y:-200,
               transition:{type:'spring' ,duration:1.2,delay:1}
               }}
               animate={{
                   y:0,
              transition:{type:'spring' ,duration:1.2,delay:1}
               }}
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}>
               Work
           </motion.h2> 
        </WORK>
        <BottomBar>
       <ABOUT to="/About" click={click}>

       <motion.h2
       initial={{
               y:200,
               transition:{type:'spring' ,duration:1.2,delay:1}
               }}
               animate={{
                   y:0,
              transition:{type:'spring' ,duration:1.2,delay:1}
               }}
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}>
    About 
</motion.h2> 
</ABOUT>
{/*
<SKILLS to="/skills">

<motion.h2
initial={{
               y:200,
               transition:{type:'spring' ,duration:1.2,delay:1}
               }}
               animate={{
                   y:0,
              transition:{type:'spring' ,duration:1.2,delay:1}
               }}
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}>
   My Skills
</motion.h2> 
</SKILLS>*/}
        </BottomBar>
        </section>
      {click ?<Intro click={click}/> :null}

           
        </MainContainer>
           
        
    )
}
export default Main;