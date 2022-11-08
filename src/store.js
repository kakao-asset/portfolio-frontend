import {createStore} from 'redux';

export default createStore(function(state, action){
    if (state === undefined){
        return "";
    }
    if (action.type === 'SEARCH'){
        return {state}
    } else return state;
}, window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__())