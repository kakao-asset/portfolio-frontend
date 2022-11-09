

export const SET_SEARCH = 'SET_SEARCH';

export const changeSearch = (search) => ({ type: 'SET_SEARCH', searchTarget: search});


const currentSearch = {
    searchTarget: []
};

export const reducer = (state = currentSearch, action) => {
    if (action.type === 'SET_SEARCH'){
        return {
            ...state, searchTarget: action.payload
        }
    } else {
        return state;
    }
}

export default reducer;