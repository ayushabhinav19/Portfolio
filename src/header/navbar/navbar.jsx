import "./navbar.css"
 
export let Navbar=({textcolor })=>{
    return(
        <div className="headsection">

            <div className="sections">
                <a className="navitext" style={{color:textcolor}} href="#projects"> Projects 🛠️ </a>
            </div>

            <div className="sections">
                <a className="navitext" style={{color:textcolor}} href="#skills">Skills 🎯</a>
            </div>

            <div className="sections">
                <a className="navitext" style={{color:textcolor}} href="#projects"> Contact ☎️</a>
            </div>

        </div>
    )
}