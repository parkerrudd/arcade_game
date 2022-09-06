import React from "react";
import Clouds from "../components/Clouds";
import Ground from "../components/Ground";
import Platforms from "../components/Platforms";
import Player from "../components/Player";
import Enemies from "../components/Enemies";
import Fireball from "../components/Fireball";

function Gamepage() {

    return (
        <div className="gamepage">
            <Clouds /> 
            <Platforms /> 
            <Ground />
            <Player />
            <Enemies />
            {/*<Fireball /> */}
        </div>  
    )
}

export default Gamepage