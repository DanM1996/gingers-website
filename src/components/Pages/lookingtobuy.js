import React, { useState} from 'react';
import { Button, Form } from 'semantic-ui-react'
import emailjs from 'emailjs-com';
import './index.css'
import { validateEmail } from '../../utils/helpers';

function LookingToBuy() {

    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', phone: '', email: ''});
    const { name, phone, email } = formState

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Please enter a valid email');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required`)
            } else {
                setErrorMessage('');
            }
        }
        console.log(errorMessage);
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('sent');
        emailjs.sendForm('service_r3nl70m', 'buy_contact', e.target, 'user_UoBjqfCNu4X3Hi0oti9xL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        });
        e.target.reset();
    };
 
    return (
        <>
        <h1>Looking to Buy?</h1>
        <div>
            <p className='buyText'>If you're looking to buy a property in the Tampa area, look no further. We're here to help you find your dream home, all you need to do is fill out the form below and we'll be in touch soon.</p>
        </div>
        <Form className="formSizing" onSubmit={sendEmail}>
            <Form.Field>
                <label>Full Name</label>
                <input defaultValue={name} onBlur={handleChange} name="name" placeholder='Enter your full name' />
            </Form.Field>
            <Form.Field>
                <label>Phone Number</label>
                <input defaultValue={phone} onBlur={handleChange} name="phone" placeholder='Enter your phone number' />
            </Form.Field>
            <Form.Field>
                <label>Email Address</label>
                <input defaultValue={email} onBlur={handleChange} name="email" placeholder='Enter your email' />
            </Form.Field>
            {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            <Button type='submit'>Submit</Button>
        </Form>
        </>
    )
}

export default LookingToBuy