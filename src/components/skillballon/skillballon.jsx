import "./skillballon.css"

export let Skillballoon=(props)=>{
    return(
            <div style={{backgroundColor:props.skilcolor}} className="skillcircle">
                <div className="emoji">
                    {props.skillemoji}
                </div>
                <div className="emojiname">
                    {props.skillname}
                </div>
            </div>
    )
}