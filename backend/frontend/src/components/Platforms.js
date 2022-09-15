import React, { useContext, useEffect, useRef } from "react";
import Context from "../context";

function Platforms() {

    const { platformLeftX, platformLeftY, updatePlatformLeft } = useContext(Context)

    const platformRef = useRef()

    useEffect(() => {
        const x = platformRef.current.offsetLeft
        const y = platformRef.current.offsetTop
        updatePlatformLeft(x, y)
        console.log(platformLeftY);
    }, [])

    return (
        <div className="platforms">
            <div className="platform one" ref={platformRef}></div>
            <div className="platform two"></div>
            <div className="platform three"></div>
        </div>
    )
}

export default Platforms;