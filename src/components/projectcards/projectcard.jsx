import { Button } from "../button/button"
import "./projectcard.css"

export let Card=(props)=>{
    return(
        <div className="card">
                <div className="projectphoto">
                    <img className="cardimage" src={props.image}></img> 
                </div>
            <div className="carddetails">
                    <div className="projectname">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="projectbio">
                        <p>{props.projectabout}</p>
                    </div>
                    <div className="skillbox">
                        <div className="skill">{props.skill1}</div>
                        <div className="skill">{props.skill2}</div>
                    </div>
                    <div className="codebutton">
                            <a href={props.gitlink} target="_blank" rel="noopener noreferrer">
                                <Button className="buttoncode" buttonimage={"images/githubbutton.png"}  name={"Git code"}></Button>
                            </a>

                            <a href={props.wwebsite} target="_blank" rel="noopener noreferrer">
                                <Button className="buttoncode" name={"View project"} ></Button>
                            </a>
                            
                    </div>
            </div>
        </div>
    )
}