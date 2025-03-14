import { useState } from 'react'
import { Herosection } from '../Herosection/hero-section'
import { Header } from '../../header/theme/theme'
import { Footer } from '../footer/footer';
import { Projects } from '../projects/projects';
import { Skills } from '../skillsset/skills';

export let Mainpage=()=>{
    const[darkmode,setdark]=useState(false);
    const[color,setcolor]=useState("beige");
    const[textcolor,settextcolor]=useState("purple");

    return(
        <div>
            <Header setcolor={setcolor} color={color} setdark={setdark} dark={darkmode} settextcolor={settextcolor} textcolor={textcolor} ></Header>
            <Herosection color={color} settextcolor={settextcolor} textcolor={textcolor}></Herosection>
            <Projects color={color} textcolor={textcolor} settextcolor={settextcolor}></Projects>
            <Skills color={color} textcolor={textcolor} settextcolor={settextcolor}></Skills>
            <Footer></Footer>
        </div>
    )
}