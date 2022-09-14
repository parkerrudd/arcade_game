import React, { useEffect, useRef, useState, useContext } from "react";
import Context from "../context";

function Enemies() {
    const [animation, setAnimation] = useState('enemySlide 3s infinite linear')
    const [left, setLeft] = useState('')
    const { playerX, playerY, enemyX, enemyY, updateEnemy, inPlay, setInPlay } = useContext(Context);

    const enemyRef = useRef()

    const getEnemyPosition = ()  => {
        const x = enemyRef.current.offsetLeft
        const y = enemyRef.current.offsetTop
        updateEnemy(x, y)
    }

    useEffect(() => {
        window.setInterval(() => {
            getEnemyPosition()
        }, 1)

        if (enemyX >= playerX - 20 && enemyX <= playerX + 20 && enemyY >= playerY - 20 && enemyY <= playerY + 20) {
            setAnimation('none')
            setInPlay(false)
            setLeft(enemyX)
        }
    }, [getEnemyPosition])

    


    return (
        <div className="enemies" style={{animation: animation, left: left}} ref={enemyRef}> 
        </div>
    )
}

export default Enemies; 