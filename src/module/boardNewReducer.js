const _SEARCH = 'DATA_SEARCH';

export const boardNewSearch = (searchData) => (
    console.log('searchData :: ', searchData),
    {
        type: _SEARCH,
        inputData: {
            content: searchData
        },
})

const initialState = {
    inputData: {
        content: ''
    }
}

export default function boardNewReducer(state=initialState, action) {
    switch(action.type){
        case _SEARCH:
            return Object.assign({}, state, {
                inputData: {
                    content: action.inputData.content
                }
            })
        default:
            return state;
    }
}