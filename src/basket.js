function basketReducer(state = {basket: []}, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            let index = state.basket.findIndex(el => el.item.id == action.item.id);
            if (index == -1) {
                return Object.assign({}, state, {
                    basket: [
                        ...state.basket, {
                            item: action.item,
                            amount: action.amount
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    basket: [
                        ...state.basket.filter((el) => {
                            if(el.item.id == action.item.id) {
                                var new_item = el
                                new_item.amount = action.amount
                                return new_item
                            }else {
                                return el
                            }
                        })
                    ]
                })
            }
                
        case 'CLEAR_BASKET':
            return {basket: []};
    
        case 'REMOVE_ITEM':
            return Object.assign({}, state, {
                basket: [
                    ...state.basket.filter(id => id !== action.id),
                ]});
        default:
            return state
    }
}

export default basketReducer;