import { useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import TextTransition, { presets } from 'react-text-transition';
import "./hero-section.css"
import { Infinity } from "lucide-react"


export let Herosection=({color,textcolor})=>{

    const Texts=["Abhinav Shukla","A Web Developer","A Tech Enthusiast"];
    const Biotext=['Creating interactive and engaging web experiences','Building responsive web applications', 'Passionate about coding and technology'];
    
    const[index,setIndex]=useState(1)
    
    useEffect(() => {
        const Biowords = setInterval(() => {
            setIndex((index) => (index + 1) % Biotext.length);
        }, 4000);
    
        return () => clearInterval(Biowords); 
    }, []);
    

    return(
        <section className="hero-div" style={{backgroundColor:color}}>
            <div className="hero-text">
                <h1 style={{color:textcolor}}>Hello, I'm <span className="name-highlight">
                    <Typewriter
                        words={Texts}
                        loop={Infinity}
                        cursor
                        cursorStyle="!"
                        typeSpeed={90}
                        deleteSpeed={100}
                        delaySpeed={2000}/>
                    </span>
                </h1>

                <div className="small-bio">
                    <p > <TextTransition springConfig={presets.wobbly}>
                            {Biotext[index]}
                        </TextTransition>
                    </p>
                </div>

                <div className="btn-primary">
                    <button>View my projects</button>
                </div>
            </div>
        </section>
    )
}