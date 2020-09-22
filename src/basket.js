function basketReducer(state = [] , action) {
    console.log(action)

    switch (action.type) {
        case 'ADD_ITEM':
            let index = state.findIndex(el => el.item.id == action.item.id);
            if (index == -1) {
                return [
                        ...state, {
                            item: action.item,
                            amount: 1
                        }
                    ]
            } else {
                return [
                    ...state.filter((el) => {
                        if(el.item.id == action.item.id) {
                            var new_item = el
                            new_item.amount = action.amount
                            return new_item
                        }else {
                            return el
                        }
                    })
                ]
            }
                
        case 'CLEAR_BASKET':
            return [];
    
        case 'REMOVE_ITEM':
            return [
                ...state.filter(el => el.item.id !== action.item.id)
            ];
        default:
            return state
    }
}

export default basketReducer;