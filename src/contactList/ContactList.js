import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import appOperators from "../redux/app/appOperators";
import appSelectors from "../redux/app/appSelectors";
import '../themes/ContactList.css';

const ContactList = ({contacts, deleteContact, getContacts}) => {
    useEffect(() => {
        getContacts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ul className="ulContacts">
            {contacts.map(({name, number, id}) => (
                <li key={id}>
                    <span>{name}: </span>
                    <span>{number}</span>
                    <button type="button"
                            onClick={() => deleteContact(id)}
                            className="deleteButton"
                    >Delete
                    </button>
                </li>))}

        </ul>)
};


const mapStateToProps = state => ({
    contacts: appSelectors.getVisibleContacts(state),
});

const mapDispatchFromProps = dispatch => ({
    deleteContact: id => dispatch(appOperators.deleteContact(id)),
    getContacts: () => dispatch(appOperators.getContacts()),
});

export default connect(mapStateToProps, mapDispatchFromProps)(ContactList);
