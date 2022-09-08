import { createContext, useState } from "react";

const Context = createContext()

export const ContextProvider = ({children}) => {
    const [enemyX, setEnemyX] = useState()
    const [enemyY, setEnemyY] = useState()
    const [playerX, setPlayerX] = useState()
    const [playerY, setPlayerY] = useState()
    const [inPlay, setInPlay] = useState(true)

    const [time, setTime] = useState(0)

    const updateTime = () => {
        setTime(time + 1)
    }

    const updateEnemy = (x, y) => {
        setEnemyX(x)
        setEnemyY(y)
    }
    const updatePlayer = (x, y) => {
        setPlayerX(x)
        setPlayerY(y)
    }

    return (
        <Context.Provider value={{enemyX, updateEnemy, playerX, updatePlayer, playerY, enemyY, time, updateTime,
        inPlay, setInPlay}}>
            {children}
        </Context.Provider>
    )
}

export default Context