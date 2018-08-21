import * as types from './ActionTypes';
import axios from 'axios';

import Reactotron from 'reactotron-react-native'


export const requestLoadCatalogData = (props) => {
    return dispatch => {
        axios.get('http://sportmax66.ru:3777/select')
            //axios.get('https://sportmax66.ru/api/orders.php?token=N8GF3J-KL8F3NA')
            .then(function (response) {
                dispatch({ type: types.RESPONSE_LOAD_CATALOG_SUCCESS, payload: response })
            })
            .catch(function (error) {
                Reactotron.log(error);
                dispatch({ type: types.RESPONSE_LOAD_CATALOG_FAILURE, error })
            })
            .then(function () {
                // always executed
            });


        // fetch('https://sportmax66.ru:80')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         dispatch({ type: types.RESPONSE_LOAD_CATALOG_SUCCESS, payload: responseJson })
        //     })
        //     .catch((error) => {
        //         alert(error);
        //     });
    }
}

export const showToast = (message) => {
    return {
        type: types.SHOW_TOAST,
        message
    }
}