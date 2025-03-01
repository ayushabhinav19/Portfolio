import { Card } from "../../components/projectcards/projectcard"
import "./projects.css"

export let Projects=(color,textcolor)=>{

    const projectimg=["Images/netflix.png","https://backiee.com/static/wallpapers/560x315/374078.jpg","Images/Pokedexphoto1.png"]
    const projectname=["Netflix Clone","To-Do List","Pokedex"]
    const projectbio=["A UI Clone of Netflix with React","Simple and efficient task manager","A React webpage displaying Pokemon data"]
    const githublink=["https://github.com/ayushabhinav19/Netflix-login-clone","https://github.com/ayushabhinav19/Pokedex"]

    return(
        <section  className="projectsection" style={{backgroundColor:color}}>

            <div className="projectheadingbox">
                <p style={{color:textcolor}}className="projectheadingtext">My Projects</p>
                
            </div>

            <div className="projectgrid">
                <Card image={projectimg[0]} title={projectname[0]} projectabout={projectbio[0]} skill1={"React"} skill2={"Css"} gitlink={githublink[0]} ></Card>
                
                <Card image={projectimg[1]} title={projectname[1]} projectabout={projectbio[1]} skill1={"React"} skill2={"LocalStorage"}></Card> 
                
                <Card image={projectimg[2]} title={projectname[2]} projectabout={projectbio[2]} skill1={"JS"} skill2={"Css"} 
                gitlink={githublink[1]}></Card>
            </div>

        </section>
    )
}