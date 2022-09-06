export const initialState = {
    enemyX: null
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_ENEMY_X': 
            return {
                ...state,
                enemyX: action.enemyX
            }
        default:
            return state
    }
}

export default reducer