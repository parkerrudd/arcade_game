import React from "react";
import Clouds from "../components/Clouds";
import Ground from "../components/Ground";
import Platforms from "../components/Platforms";

function Gamepage() {

    return (
        <div className="gamepage">
            <Clouds /> 
            <Platforms /> 
            <Ground />
            {/* <Player /> */}
        </div>  
    )
}

export default Gamepage