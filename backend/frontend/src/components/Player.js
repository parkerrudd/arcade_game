import React, { useEffect, useState, useRef, useContext } from "react";
import Context from "../context";

function Player () {

    const { playerX, updatePlayerX } = useContext(Context)

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
        updatePlayerX(x)
        const y = playerRef.current.offsetTop
    }

    useEffect(() => {
        setInterval(() => {
            getPlayerPosition()
        }, 10);
        // console.log(playerX)
    }, [getPlayerPosition])



    return (
        <div className="player" ref={playerRef}  style={{animation: jump}} onKeyUp={keyUp}>
            
        </div>
    )
}

export default Player; 