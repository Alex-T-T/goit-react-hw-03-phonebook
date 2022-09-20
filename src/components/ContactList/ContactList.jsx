import React from "react";
import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

export class ContactList extends React.Component {
    


    render() { 
        return <ul className={css.contactList}>
                { this.props.contacts.map(contact => <li key={contact.id} className={css.contactListItem}>
                                <p>Name: {contact.name}</p>
                                <p>Number: {contact.number}</p>
                                <button className={css.contactRemoveBtn} onClick={()=> this.props.onRemoveContact(contact.id)} type="button"> Remove </button>
                            </li>
                    
                )}  
        </ul>
    
    }
    
}

ContactList.propTypes = {
    onRemoveContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}