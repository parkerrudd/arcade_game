import React, { useContext, useEffect, useRef } from "react";
import Context from "../context";

function Platforms() {

    const { platformLeftX, platformLeftY, updatePlatformLeft, playerX } = useContext(Context)

    const platformLeftRef = useRef()
    const platformHighRef = useRef()


    useEffect(() => {
        const x = platformLeftRef.current.offsetLeft
        const y = platformLeftRef.current.offsetTop
        updatePlatformLeft(x, y)
        console.log(platformHighRef.current.offsetTop)
    }, [platformLeftY, playerX])

    return (
        <div className="platforms">
            <div className="platform one"></div>
            <div className="platform two" ref={platformLeftRef}></div>
            <div className="platform three" ref={platformHighRef}></div>
        </div>
    )
}

export default Platforms;