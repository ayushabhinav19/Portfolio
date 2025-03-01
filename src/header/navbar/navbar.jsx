import "./navbar.css"
 
export let Navbar=({ textcolor })=>{
    return(
        <div style={{color:textcolor}} className="headsection">
            <div className="sections">
                Projects 🛠️ 
            </div>
            <div className="sections">
                Skills 🎯
            </div>
            <div className="sections">
                Contact me ☎️
            </div>
        </div>
    )
}