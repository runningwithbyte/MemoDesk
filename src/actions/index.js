import * as types from './ActionTypes';
import axios from 'axios';

import Reactotron from 'reactotron-react-native'

export const requestGetPicsList = (deviceId) => {
    return dispatch => {
        axios.get('http://138.68.44.49:3777/getPicsList?deviceId=' + deviceId)
            .then(function (response) {
                dispatch({ type: types.RESPONSE_GET_PICS_LIST_SUCCESS, payload: response.data })
            })
            .catch(function (error) {
                Reactotron.log(error);
                dispatch({ type: types.RESPONSE_GET_PICS_LIST_FAILURE, error })
            })
            .then(function () {
                // always executed
            });
    }
}

export const showToast = (message) => {
    return {
        type: types.SHOW_TOAST,
        message
    }
}

export const addNewDevice = (deviceId, deviceName) => {
    return {
        type: types.ADD_NEW_DEVICE,
        deviceId, deviceName
    }
}

export const removeDevice = (deviceId) => {
    return {
        type: types.REMOVE_DEVICE,
        deviceId
    }
}