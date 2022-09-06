import React, { useEffect, useRef, useState, useContext } from "react";
import Context from "../context";

function Enemies() {
    const { enemyX, updateEnemyX } = useContext(Context);

    const enemyRef = useRef()

    const getEnemyPosition = ()  => {
        const x = enemyRef.current.offsetLeft
        updateEnemyX(x)
        const y = enemyRef.current.offsetTop
    }

    useEffect(() => {
        window.setInterval(() => {
            getEnemyPosition()
        }, 10)
        // getEnemyPosition()
        // console.log(enemyX);
    }, [getEnemyPosition])
    


    return (
        <div className="enemies" ref={enemyRef}> 
        </div>
    )
}

export default Enemies; 