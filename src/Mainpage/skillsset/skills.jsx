import { Skillballoon } from "../../components/skillballon/skillballon"
import "./skills.css"

export let Skills=()=>{

    const skillname=["HTML","CSS","JavaScript","React","Tailwind","Python","Node js","Python","GitHub","Vs Code","Figma"]
    const skillcolor=["#FFE6DD"," #E6EEFF","#FFF8E1","#E6F7FF","#E6FFF4","#F0F4F8", "#F8F9F0" ,"#F0F4F8","#F8F7J9","#F2E6FF" ]
    const skillemoji=["🌐","🎨","📜","⚛️","🌊","🐍","🟢","📝","🖌️","🐙"]
    
    return(
        <section id="skills" className="skillsection">

            <div className="skillheadingbox">
                <p className="skillheadingtext">My Skills</p>
            </div>

            <div className="skillheadname">
                Frontend
            </div>

            <div className="skillgrid">
                <Skillballoon skillname={skillname[0]} skillemoji={skillemoji[0]} skilcolor={skillcolor[0]}></Skillballoon>
                <Skillballoon skillname={skillname[1]} skillemoji={skillemoji[1]} skilcolor={skillcolor[1]}></Skillballoon>
                <Skillballoon skillname={skillname[2]} skillemoji={skillemoji[2]} skilcolor={skillcolor[2]}></Skillballoon>
                <Skillballoon skillname={skillname[3]} skillemoji={skillemoji[3]} skilcolor={skillcolor[3]}></Skillballoon>
                <Skillballoon skillname={skillname[4]} skillemoji={skillemoji[4]} skilcolor={skillcolor[4]}></Skillballoon>
            </div>

            <div className="skillheadname">
                Backend
            </div>

            <div className="skillgrid">
                <Skillballoon skillname={skillname[7]} skillemoji={skillemoji[5]} skilcolor={skillcolor[5]}></Skillballoon>
                <Skillballoon skillname={skillname[6]} skillemoji={skillemoji[6]} skilcolor={skillcolor[6]}></Skillballoon>
            </div>

            <div className="skillheadname">
                Familiar Tools
            </div>

            <div className="skillgrid">
                <Skillballoon skillname={skillname[8]} skillemoji={skillemoji[9]} skilcolor={skillcolor[7]}></Skillballoon>
                <Skillballoon skillname={skillname[9]} skillemoji={skillemoji[7]} skilcolor={skillcolor[8]}></Skillballoon>
                <Skillballoon skillname={skillname[10]} skillemoji={skillemoji[8]} skilcolor={skillcolor[9]}></Skillballoon>
            </div>
            
        </section>
    )
}