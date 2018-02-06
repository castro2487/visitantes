import axiosClient from "../Container/endpoint";
import * as actionTypes from "../store/actions";

const loadCountries = (callback) =>{
    return dispatch => {
        axiosClient.get('/all?fields=name')
            .then(response => {
                dispatch({type: actionTypes.RECEIVE_COUNTRIES, brandsData: {...response}});
                callback();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

export {loadCountries};