const INITIAL_STATE = {
    currentFormCategory : null
}



const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
       
        case 'SET_FORM_CATEGORY' : 
        return {
            ...state,
            currentFormCategory : action.payload
        }

        default:
            return state
    }
}


export default categoriesReducer;