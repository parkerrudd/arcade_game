import React, { useEffect, useState, useRef, useContext, useCallback } from "react";
import Context from "../context";

function Player () {

    const { playerX, playerY, updatePlayer} = useContext(Context)

    const [jump, setJump] = useState('')
    const [left, setLeft] = useState(100)
    const pixelDistance = 20
    const playerRef = useRef()

    const getPlayerPosition = () => {
        const x = playerRef.current.offsetLeft
        const y = playerRef.current.offsetTop
        updatePlayer(x, y)
    }

    useEffect(() => {
        setInterval(() => {
            getPlayerPosition()
        }, 1);
    }, [getPlayerPosition])

    const move = useCallback((direction) => {
        switch (direction) {
            case 'left': 
                setLeft((left) => left - pixelDistance)
                break; 
            case 'right': 
                setLeft((left) => left + pixelDistance)
                break
        }
    }, [])

    const onKeyPress = useCallback((e) => {
        switch(e.keyCode) {
            case 38: 
                setJump('jump 1s')
                setTimeout(() => {
                    setJump('')
                }, 1000)
                break
            case 37: 
                move('left')
                break
            case 39: 
                move('right')
                break
        }
    }, [move])

    useEffect(() => {
        document.addEventListener('keydown', onKeyPress)
        return () => {
            document.removeEventListener('keydown', onKeyPress)
        }
    }, [onKeyPress])



    return (
        <div className="player" ref={playerRef}  style={{animation: jump, left: `${left}px`}} >
            
        </div>
    )
}

export default Player; 