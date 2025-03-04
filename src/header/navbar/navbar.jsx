import "./navbar.css"
 
export let Navbar=({ textcolor })=>{
    return(
        <div style={{color:textcolor}} className="headsection">

            <div className="sections">
                <a href="#projects"> Projects 🛠️ </a>
            </div>

            <div className="sections">
                <a href="#skills">Skills 🎯</a>
            </div>

            <div className="sections">
                <a href="#projects"> Contact me ☎️</a>
            </div>

        </div>
    )
}