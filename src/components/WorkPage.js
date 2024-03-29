import React, { useEffect,useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Card from '../subComponents/Card'
import { motion } from 'framer-motion'


import { DarkTheme } from './Themes'
import LogoComponents from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
// For this link all the data comming from 
import {Work} from "../data/WorkData";
import { YinYang } from './AllSvags'
import BigTitlte from '../subComponents/BigTitlte'



const Box =styled.div` 
background-color:${props=>props.theme.body};

height:400vh;
position:relative;
display:flex;
align-items:center;



` 
const Main= styled(motion.ul)`
position: fixed;
top:12rem;
left:calc(10rem + 15rw);
height:40vh;
display:flex;
color:white;
`

const  Rotate =styled.span`

dispalay:block;
position:fixed;
right:1rem;
bottom:1rem;
width:80px;
height:80px;
z-index:1;



 

`
const section={
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.5,
            duration:0.5,
        }
    }

}

const WorkPage = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);



    useEffect(() => {
        let element = ref.current;
       
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset}px)`
      
         
          return (yinyang.current.style.transform =
            'rotate(' + -window.pageYOffset + 'deg)')
        }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])


    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponents theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />

     <Main ref={ref}   variants={section} initial='hidden' animate='show'  >
         {
            Work.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Main>
<Rotate ref={yinyang}>
    <YinYang width={80} height={80} fill={DarkTheme.text} />
</Rotate>

<BigTitlte text="WORK" top='10%' right="20%" />
        </Box>

        </ThemeProvider>
        
    )
}

export default WorkPage



