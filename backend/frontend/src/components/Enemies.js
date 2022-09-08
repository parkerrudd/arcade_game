import React, { useEffect, useRef, useState, useContext } from "react";
import Context from "../context";

function Enemies() {
    const [animation, setAnimation] = useState('enemySlide 5s infinite linear')
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

        if (enemyX >= playerX - 10 && enemyX <= playerX + 10 && enemyY >= playerY - 10 && enemyY <= playerY + 10) {
            setAnimation('none')
            setInPlay(false)
            console.log(inPlay);
        }
    }, [getEnemyPosition])

    


    return (
        <div className="enemies" style={{animation: animation}} ref={enemyRef}> 
        </div>
    )
}

export default Enemies; 