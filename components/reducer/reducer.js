import {combineReducers} from 'redux';
import arrReducer from './arrReducer';

const reducer=combineReducers({
    myCart: arrReducer,
});

export default reducer;