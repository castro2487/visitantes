import * as actionTypes from './actions';
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const initialState = {
    country: {
        name: "",
    },
    countries:[],
 
};

const visitorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_COUNTRIES:
            const newCountries = [...action.countriesData.data];
            console.log(newCountries);
            return{...state, countries: newCountries};
            default:
            return state;
    }
};

const rootReducer = combineReducers({
    visitor: visitorReducer,
    form: formReducer
});
export default rootReducer;