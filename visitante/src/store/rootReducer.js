import * as actionTypes from './actions';
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const initialState = {
    car: {
        brand: '',
    },
    brands:[],
 
};

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_COUNTRIES:
            const newBrands = [...action.brandsData.data];
            console.log(newBrands);
            return{...state, brands: newBrands};
            default:
            return state;
    }
};

const rootReducer = combineReducers({
    quote: quoteReducer,
    form: formReducer
});
export default rootReducer;