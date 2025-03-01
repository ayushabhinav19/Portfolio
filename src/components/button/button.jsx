import "./button.css"

export let Button=(props)=>{
    return(
        <button className="buttoncode"><img className="gitbutton" src={props.buttonimage} onClick={onclick}></img> {props.name}</button>
    )
};