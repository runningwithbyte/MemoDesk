import * as types from "../actions/ActionTypes";
import * as _ from 'lodash'
import Reactotron from 'reactotron-react-native'


const initialState = [];

const Data = (state = initialState, action) => {
    switch (action.type) {
        case types.RESPONSE_LOAD_CATALOG_SUCCESS: {
            return {
                ...state,
                ..._.merge(state, action.payload)
            }
        }
        case types.INIT: {
            return {
                //...state,
                ...initialState
            }
        }
        default: {
            return state;
        }
    }
};

export default Data;