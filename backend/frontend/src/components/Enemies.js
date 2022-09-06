import React, { useEffect, useRef, useState, useContext } from "react";
import Context from "../context";

function Enemies() {
    const [animation, setAnimation] = useState('enemySlide 5s infinite linear')
    const { playerX, enemyX, enemyY, updateEnemy } = useContext(Context);

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
        // getEnemyPosition()
        // console.log(enemyY);
        // console.log(animation)
        if (enemyX >= 74 && enemyX <= 80) {
            setAnimation('none')
        }
    }, [getEnemyPosition])

    


    return (
        <div className="enemies" style={{animation: animation}} ref={enemyRef}> 
        </div>
    )
}

export default Enemies; 