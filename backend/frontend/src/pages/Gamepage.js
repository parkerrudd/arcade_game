import React, { useContext, useEffect } from "react";
import Clouds from "../components/Clouds";
import Ground from "../components/Ground";
import Platforms from "../components/Platforms";
import Player from "../components/Player";
import Enemies from "../components/Enemies";
import Fireball from "../components/Fireball";
import Timer from "../components/Timer";
import Context from "../context";

function Gamepage() {

    const { enemyX, playerX } = useContext(Context)
    
    // useEffect(() => {
    //     if (enemyX === playerX) alert('you lose')
    // }, [playerX, enemyX])

    return (
        <div className="gamepage">
            <Clouds /> 
            <Timer />
            <Platforms /> 
            <Ground />
            <Player />
            <Enemies />
           {/* <Fireball /> */}
        </div>  
    )
}

export default Gamepage