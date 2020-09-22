function userReducer(state = {user: undefined}, action) {
    switch (action.type) {
        case 'SET_USER':
            return Object.assign({}, state, {
                user: action.user
            })
        case 'CLEAR_USER':
            return Object.assign({}, state, {
                user: undefined
            })
        default:
            return state
    }
}

export default userReducer;