import * as types from "../actions/ActionTypes";
import * as _ from 'lodash'
import Reactotron from 'reactotron-react-native'


const initialState = {
    devices: []
};

const Data = (state = initialState, action) => {
    switch (action.type) {
        case types.RESPONSE_LOAD_CATALOG_SUCCESS: {
            return {
                ...state,
                ..._.merge(state, action.payload)
            }
        }
        case types.ADD_NEW_DEVICE: {
            state.devices.push({ deviceId: action.deviceId, deviceName: action.deviceName });
            return {
                ...state,
                devices: state.devices
            }
        }
        case types.REMOVE_DEVICE: {
            const devices = state.devices.filter(i => i.deviceId !== action.deviceId);
            if (!devices) devices = [];
            return {
                ...state,
                devices
            }
        }
        case types.INIT: {
            return {
                ...initialState
            }
        }
        default: {
            return state;
        }
    }
};

export default Data;