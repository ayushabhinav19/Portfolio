import "./button.css"

export let Button=(props)=>{
    return(
        <button className="buttoncode" onClick={onclick}><img className="gitbutton" src={props.buttonimage} ></img> {props.name}</button>
    )
};