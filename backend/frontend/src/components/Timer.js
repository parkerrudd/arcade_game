import React, { useContext, useEffect, useState } from "react";
import Context from "../context";

function Timer() {

    const {time, updateTime, inPlay} = useContext(Context)

    useEffect(() => {
        const timer = setInterval(() => {
            updateTime()
        }, 1000);

        if (!inPlay) clearInterval(timer)

        return () => clearInterval(timer)
    }, [time])


    return (
        <div className="timer">{time}</div>
    )
}

export default Timer