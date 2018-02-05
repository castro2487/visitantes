import axiosClient from "../Container/endpoint";
import * as actionTypes from "../store/actions";

const loadBrands = (callback) =>{
    return dispatch => {
        axiosClient.get('/car/brand')
            .then(response => {
                dispatch({type: actionTypes.RECEIVE_BRANDS, brandsData: {...response}});
                callback();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

export {loadBrands};