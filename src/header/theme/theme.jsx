import { MoonIcon, SunDimIcon } from "lucide-react"
import "./theme.css"
import { Navbar } from "../navbar/navbar"


export let Header=({color,dark,setdark,setcolor,textcolor,settextcolor})=>{
localStorage.setItem("isDarkModeENabled","dark")
    
let theme=()=>{
    
    let isDarkMode = color === "black";
    setdark(isDarkMode);
    setcolor(isDarkMode ? "beige" : "black");
    settextcolor(isDarkMode ? "purple" : "beige"); 
}

    return(
        <section className="header" style={{backgroundColor:color}}>
            <div className="themeicon"onClick={theme}>
                {color==="beige"?<SunDimIcon color="black" /> : <MoonIcon color="gray" />}
            </div>
            <div>
                <Navbar textcolor={textcolor}></Navbar>
            </div>
        </section>
    )
}