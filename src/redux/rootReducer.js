const initialState = {
    searchData: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_SEARCH":
            return {...state, searchData: action.detail};
        default:
            return state;
    } 
};

export default rootReducer;