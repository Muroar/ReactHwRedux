import types from './appTypes'

const getContactRequest = () => ({
    type: types.GET_REQUEST,
});

const getContactSuccess = value => ({
    type: types.GET_SUCCESS,
    payload: value,
});

const getContactError = error => ({
    type: types.GET_ERROR,
    payload: error,
});


const addContactRequest = () => ({
    type: types.ADD_REQUEST,
});

const addContactSuccess = value => ({
    type: types.ADD_SUCCESS,
    payload: value,
});

const addContactError = error => ({
    type: types.ADD_ERROR,
    payload: error,
});

const deleteContactRequest = () => ({
    type: types.DELETE_REQUEST,
});

const deleteContactSuccess = id => ({
    type: types.DELETE_SUCCESS,
    payload: id,
});

const deleteContactError = error => ({
    type: types.DELETE_ERROR,
    payload: error,
});

const changeFilter = value => ({
    type: types.FILTER,
    payload: value,
});

const exportObjectFour = {
    getContactRequest,
    getContactSuccess,
    getContactError,
    addContactRequest,
    addContactSuccess,
    deleteContactRequest,
    addContactError,
    deleteContactSuccess,
    deleteContactError,
    changeFilter
}

export default exportObjectFour;