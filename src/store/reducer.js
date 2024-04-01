const basketState = [];



const reducer = (state = basketState, action) => {
    switch(action.type) {
        case 'ADD_ITEM': 
            if(state.findIndex(item => item.name == action.productData?.name) != -1) {
                let index = state.findIndex(item => item.name == action.productData?.name)
                state.splice(index, index + 1, action.productData)
                return [
                    ...state
                ]
            } else {
                return [
                    ...state,
                    action.productData
                ]
            }
        
        case 'REMOVE_ITEM':
            if(state.findIndex(item => item.name == action.productData?.name) != -1) {
                let index = state.findIndex(item => item.name == action.productData?.name)
                state.splice(index, index + 1)
                return [
                    ...state
                ]
            } else {
                return [
                    ...state,
                ]
            }

        default: 
            return state
            
    }
}

export default reducer;