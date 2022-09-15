import { createContext, useState } from "react";

const Context = createContext()

export const ContextProvider = ({children}) => {
    const [enemyX, setEnemyX] = useState()
    const [enemyY, setEnemyY] = useState()
    const [playerX, setPlayerX] = useState()
    const [playerY, setPlayerY] = useState()
    const [fireballX, setFireballX] = useState()
    const [fireballY, setFireballY] = useState()
    const [platformLeftX, setPlatformLeftX] = useState()
    const [platformLeftY, setPlatformLeftY] = useState()
    const [inPlay, setInPlay] = useState(true)
    const [time, setTime] = useState(0)

    const updateEnemy = (x, y) => {
        setEnemyX(x)
        setEnemyY(y)
    }
    const updatePlayer = (x, y) => {
        setPlayerX(x)
        setPlayerY(y)
    }

    const updateFireball = (x, y) => {
        setFireballX(x)
        setFireballY(y)
    }

    const updatePlatformLeft = (x, y) => {
        setPlatformLeftX(x)
        setPlatformLeftY(y)
    }

    return (
        <Context.Provider value={{enemyX, updateEnemy, playerX, updatePlayer, playerY, enemyY, time, setTime, 
            inPlay, setInPlay, fireballX, fireballY, updateFireball, platformLeftX, platformLeftY, updatePlatformLeft}}>
            {children}
        </Context.Provider>
    )
}

export default Context