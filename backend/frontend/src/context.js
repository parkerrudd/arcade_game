import { createContext, useState } from "react";

const Context = createContext()

export const ContextProvider = ({children}) => {
    const [enemyX, setEnemyX] = useState(0)
    const [playerX, setPlayerX] = useState(0)

    const updateEnemyX = (x) => {
        setEnemyX(x)
    }
    const updatePlayerX = (x) => {
        setPlayerX(x)
    }
    return (
        <Context.Provider value={{enemyX, updateEnemyX, playerX, updatePlayerX}}>
            {children}
        </Context.Provider>
    )
}

export default Context