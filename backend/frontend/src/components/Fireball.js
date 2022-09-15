import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../context";

function Fireball({ width, height, animation }) {
    
    const [left, setLeft] = useState()
    const [top, setTop] = useState()
    const [animate, setAnimate] = useState(`${animation} 3s linear infinite`)
    const { fireballX, fireballY, updateFireball, playerX, playerY, inPlay, setInPlay } = useContext(Context)

    const fireballRef = useRef()

    const getFireballPosition = () => {
        const x = fireballRef.current.offsetLeft
        const y = fireballRef.current.offsetTop
        updateFireball(x, y)
    }

    useEffect(() => {
        setInterval(() => {
            getFireballPosition()
        }, 1);

        if (fireballX >= playerX - 40 && fireballX <= playerX + 10 && fireballY >= playerY - 110 && fireballY <= playerY + 40) {
            setInPlay(false)
            setLeft(fireballX)
            setTop(fireballY)
            setAnimate('none')
        }

    }, [getFireballPosition])

    return (
        <div className="fireball" ref={fireballRef} style={
            {animation: animate, width: `${width}px`, height: `${height}px`, left: left, top: top}
        }></div>
    )
}

export default Fireball; 