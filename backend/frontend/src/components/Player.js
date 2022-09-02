import React, { useEffect, useState, useRef } from "react";

function Player () {

    const [jump, setJump] = useState('')
    const keyUp = () => {
        setJump('jump 1s')

        setTimeout(() => {
            setJump('')
        }, 1000)
    }

    useEffect(() => {
        document.addEventListener('keyup', keyUp)
    }, [])


    return (
        <div className="player"  style={{animation: jump}} onKeyUp={keyUp}>
            
        </div>
    )
}

export default Player; 