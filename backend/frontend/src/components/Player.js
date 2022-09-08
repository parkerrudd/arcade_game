import React, { useEffect, useState, useRef, useContext } from "react";
import Context from "../context";

function Player () {

    const { playerX, playerY, updatePlayer} = useContext(Context)

    const [jump, setJump] = useState('')
    const playerRef = useRef()

    const keyUp = () => {
        setJump('jump 1s')

        setTimeout(() => {
            setJump('')
        }, 1000)
    }

    useEffect(() => {
        document.addEventListener('keyup', keyUp)
    }, [])

    const getPlayerPosition = () => {
        const x = playerRef.current.offsetLeft
        const y = playerRef.current.offsetTop
        // console.log(y)
        updatePlayer(x, y)
    }

    useEffect(() => {
        setInterval(() => {
            getPlayerPosition()
        }, 1);
        // console.log(playerY)
    }, [getPlayerPosition])



    return (
        <div className="player" ref={playerRef}  style={{animation: jump}} onKeyUp={keyUp}>
            
        </div>
    )
}

export default Player; 