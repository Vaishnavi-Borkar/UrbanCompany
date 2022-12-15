import { Link } from "react-router-dom";
function NotFound() {


    return (
        <>
            <img style={{ width: "100%", height: "700px" }} src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="notfound" />

            <Link to="/"
                style={{ position: "absolute", top: "450px", color: "blue", left: "50%", textDecoration: "none" }}>Go Back</Link>
        </>
    )
}

export default NotFound;