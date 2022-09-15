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

    const { time } = useContext(Context)

    return (
        <div className="gamepage">
            <Clouds /> 
            <Timer />
            <Platforms /> 
            <Ground />
            <Player />
            <Enemies seconds={4} /> 
            { time >= 10 ? <Enemies seconds={2.5} /> : null }
            { time >= 20 ? <Fireball width={100} height={100} animation={'fireball__one'} /> : null }
            { time >= 30 ? <Fireball width={80} height={80} animation={'fireball__two'} /> : null }
           
        </div>  
    )
}

export default Gamepage