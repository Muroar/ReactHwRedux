import {combineReducers} from "redux";
import types from './appTypes';

const contacts = (state = [], {type, payload}) => {
    switch (type) {
        case types.GET_SUCCESS:
            return payload
        case types.DELETE_SUCCESS:
            return state.filter(contact => contact.id !== payload)
        case types.ADD_SUCCESS:
            return [...state, payload]
        default:
            return state;
    }
};

const filter = (state = '', {type, payload}) => {
    switch (type) {
        case types.FILTER:
            return payload;
        default:
            return state;
    }
};

const loading = (state = false, {type}) => {
    switch (type) {
        case types.GET_REQUEST:
            return true;
        case types.GET_SUCCESS:
            return false;
        case types.GET_ERROR:
            return true;
        case types.ADD_REQUEST:
            return true;
        case types.ADD_SUCCESS:
            return false;
        case types.ADD_ERROR:
            return true;
        case types.DELETE_REQUEST:
            return true;
        case types.DELETE_SUCCESS:
            return false;
        case types.DELETE_ERROR:
            return true;
        default:
            return state;
    }
};

export default combineReducers({
        contacts,
        filter,
        loading,
    }
)
