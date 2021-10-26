import React, {Component} from 'react';
import {connect} from 'react-redux';
import shortid from "shortid";
import appOperators from "../redux/app/appOperators";
import appSelectors from "../redux/app/appSelectors";
import '../themes/ContactForm.css';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value})
    }


    submitForm = event => {
        const {name, number} = this.state;
        this.handleSubmit(event, name, number);
        this.reset()
    }

    handleSubmit = (event, name, number) => {
        event.preventDefault()

        if (name.length > 0 && number.length > 0) {
            const sameContact = this.props.contacts.find(contact => name === contact.name);

            if (!sameContact) {
                this.props.getAddContact({name, number, id: shortid.generate()})
            } else {
                alert(`${name} is already in contacts`)
            }
        }
    }

    reset = () => this.setState({name: "", number: ""});

    render() {
        const {name, number} = this.state;

        return (
            <>
                {this.props.isLoadingContacts && <h2>Loading...</h2>}
                <form onSubmit={this.submitForm} className="formSubmit">
                    <p className="nameForm">Name</p>
                    <label>
                        <input type="text"
                               name="name"
                               value={name}
                               onChange={this.handleChange}/>
                    </label>
                    <p className="nameForm">Number</p>
                    <label>
                        <input type="number"
                               name="number"
                               value={number}
                               onChange={this.handleChange}/>
                    </label>
                    <button type="submit" className="buttonAddContact">Add contact</button>
                </form>
            </>

        )
    }
}

const mapStateToProps = state => ({
    contacts: appSelectors.getContacts(state),
    isLoadingContacts: state.app.loading,
});

const mapDispatchToProps = dispatch => ({
    getAddContact: (contact) => dispatch(appOperators.addContact(contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
