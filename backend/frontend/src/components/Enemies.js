import React, { useEffect, useRef, useState } from "react";

function Enemies() {
    const [enemyX, setEnemyX] = useState()
    const [enemyY, setEnemyY] = useState()

    const enemyRef = useRef()

    const getEnemyPosition = ()  => {
        const x = enemyRef.current.offsetLeft
            setEnemyX(x)
        const y = enemyRef.current.offsetTop
            setEnemyY(y)
        return x
    }

    // useEffect(() => {
    //     window.setInterval(() => {
    //         getEnemyPosition()
    //     }, 10)
    //     console.log(getEnemyPosition());
    // }, [getEnemyPosition])
    


    return (
        <div className="enemies" ref={enemyRef}> 
        </div>
    )
}

export default Enemies; 