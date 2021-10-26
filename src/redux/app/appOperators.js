import axios from 'axios'
import appActions from "./appActions";

axios.defaults.baseURL = 'http://localhost:5005/';

const getContacts = () => dispatch => {
dispatch(appActions.getContactRequest())

    axios
        .get('/contacts')
        .then(({data}) => dispatch(appActions.getContactSuccess(data)))
        .catch(error => dispatch(appActions.getContactError(error)))
}

const addContact = contact => dispatch => {
    dispatch(appActions.addContactRequest())

    axios
        .post('/contacts', contact)
        .then(({data}) => dispatch(appActions.addContactSuccess(data)))
        .catch(error => dispatch(appActions.addContactError(error)))
}

const deleteContact = id => dispatch => {
    dispatch(appActions.deleteContactRequest())

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(appActions.deleteContactSuccess(id)))
        .catch(error => dispatch(appActions.deleteContactError()))
}

const exportObjectThree = {
    getContacts,
    addContact,
    deleteContact,
}
export default exportObjectThree;