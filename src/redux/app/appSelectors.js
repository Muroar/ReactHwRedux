import {createSelector} from '@reduxjs/toolkit'



const getContacts = state => state.app.contacts;
const getFilter = state => state.app.filter;

const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    });

    const exportObject = {
        getContacts,
        getFilter,
        getVisibleContacts
    }
export default exportObject;