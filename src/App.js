import React from 'react';
import './themes/App.css';
import Filter from './filter/Filter'
import ContactList from './contactList/ContactList'
import ContactForm from './contactForm/ContactForm'

const App = () => (
    <>
        <h1 className="h1PhoneBook">Phone Book</h1>
        <ContactForm/>
        <hr/>
        <h2 className="h2Contacts">Contacts</h2>
        <Filter/>
        <ContactList/>
    </>
);

export default App;
