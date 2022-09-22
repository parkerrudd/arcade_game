import React, { useEffect, useState, useRef, useContext, useCallback } from "react";
import Context from "../context";

function Player () {

    const { playerX, playerY, updatePlayer, platformLeftX, platformLeftY} = useContext(Context)

    const [jump, setJump] = useState('')
    const [left, setLeft] = useState(100)
    const [bottom, setBottom] = useState('8%')

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

        if (playerY >= platformLeftY - 20 && playerY <= platformLeftY + 20 
            && playerX >= platformLeftX + 5 && playerX <= platformLeftX * 2
            || playerY >= platformLeftY - 20 && playerY <= platformLeftY + 20 
            && playerX >= platformLeftX * 3 && playerX <= platformLeftX * 4) {
            setBottom('33%')
        } else if (
                playerX <= platformLeftX 
                || playerX >= platformLeftX * 4 
                || playerY >= (platformLeftY / 2) 
                && playerX >= platformLeftX * 2
                && playerX <= platformLeftX * 3) {
           setBottom('8%')
        } else if (playerY <= (platformLeftY / 2) && playerX >= platformLeftX * 2 && playerX <= platformLeftX * 3) {
            setBottom('63%')
            console.log('up top')
        } 
    }, [getPlayerPosition, playerX, playerY])

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
                if (bottom === '8%'){ 
                    setJump('jump .75s')
                } else if (bottom === '33%') {
                    setJump('jumpPlatformLow .75s')
                } else if (bottom === '63%') {
                    setJump('jumpPlatformHigh .75s')
                }
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
    }, [move, bottom])

    useEffect(() => {
        document.addEventListener('keydown', onKeyPress)
        return () => {
            document.removeEventListener('keydown', onKeyPress)
        }
    }, [onKeyPress])

    return (
        <div className="player" ref={playerRef}  style={{animation: jump, left: `${left}px`, bottom: bottom}} >
        </div>
    )
}

export default Player; 