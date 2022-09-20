import PropTypes from 'prop-types';
import React from 'react';
import css from '../Form/Form.module.css';

export class Form extends React.Component {

    state = {
        name: '',
        number: ''
    }

    handleInputChange = (event) => {
        const { name, value } = event.currentTarget
            
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({
        name: '',
        number: ''
        });
    }

    render() {
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
            <label> Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                            onChange={this.handleInputChange}
                    />
            </label>

            <label> Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={this.state.number}
                            onChange={this.handleInputChange}

                    />
            </label>    

                <button className={css.addBtn } type='submit'> Add contact</button>
        </form>
        )
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,

}