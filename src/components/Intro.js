
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Me from '../assets/Images/eee.png'



const Box=styled(motion.div)`

position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);

width:55vw;
/*-- here is the place
 to change --


-*/
height:30vh;

display:flex;



background:linear-gradient(
    to right,
    ${props=> props.theme.body} 50%,
    ${props => props.theme.text} 50%)bottom,
linear-gradient(
to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text } 50%)top;


    background-repeat:no-repeat;
     background-size:100% 2px;
    border-left:2px solid ${props => props.theme.body};
    border-right:2px solid ${props => props.theme.text};
    z-index:1;

`
const SubBox=styled.div`
width:50%;
position:relative;
display:flex;

.pic{
    position:absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%,0%);
    width:100%;
    height:auto;

}
`

//font-size:calc(2rem+2.5vw); doesn't work 
const Text=styled.div`
font-size:2rem;
color:${props=>props.theme.body};
padding:2rem;
cursor:pointer;
dispaly:flex;
flex-direction:column;
justify-content:space-evenly;
&>*:last-child{
    color:${props=>`rgba(${props.theme.bodyRgba},0.6)`
  
  
   /*- cann't put any more style -*/

}
`

function Intro() {
    return (
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type:'spring',duration:2,delay:1}}
        
        >
        <SubBox>
        <Text>
            <h1>Hello,</h1>
            <br/>
          
            <h3> I'm </h3><br/>
            <h3>Dhiraj Khadka.</h3>
            <br/><br/>
            <h6>Welcome to my Portfolio.</h6>
            
            <h5 style={{ color:"rgba(252, 246, 244, 0.6)"}}>I am a frontend developer & web designer. </h5><br/>
 
        </Text>
        </SubBox>
        <SubBox>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1,delay:2}}
        >
            <img className="pic" src={Me} alt="Profile Pic"></img>
        </motion.div>
        </SubBox>
           
        </Box>
    )
}

export default Intro
