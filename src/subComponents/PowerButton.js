//Home Button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvags'


const Power= styled.button`

position:fixed;
top:2rem;
left:50%;
transform:translate(-50%,0);
background-color:#FCF6F4;
padding:0.3rem;
/*--border:1px solid #000;-- */

border-radius:50%;
width:2.5rem;
height:2.5rem;
display:flex;
justify-content:center;
align-items:center;
z-index:3;
cursor:pointer;

&:hover{
    background-color:rgba(o,255,0,0,4);
    box-shadow:0 0 8px 6px rgb(0,255,0,0.2);
}

&>*:first-child{
    
    text-decoratio:none;
    color:inherit;
}
`
//the chid part we  can remove if that have no function in project
const PowerButton = () => {
    return (
        <Power>
        <NavLink to ="/">
        
            <PowerBtn width={30} height={30} fill='currentColor'/>
        </NavLink>
        </Power>

    )
}

export default PowerButton
