import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import emailjs from 'emailjs-com';
import './index.css'

function LookingToSell() {

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('sent');
        emailjs.sendForm('service_r3nl70m', 'sell_contact', e.target, 'user_UoBjqfCNu4X3Hi0oti9xL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        });
        e.target.reset();
    };

    return (
        <>
        <h1>Looking to Sell?</h1>
        <div>
            <p className='sellText'>If you're looking to sell your home and need a realtor, we're happy to help you. All you need to do is fill out the form below with the required information and we'll be in touch with you.</p>
        </div>
        <Form className="formSizing" onSubmit={sendEmail}>
            <Form.Field>
                <label>Full Name</label>
                <input name="user_name" placeholder='Enter your full name' />
            </Form.Field>
            <Form.Field>
                <label>Phone Number</label>
                <input name="user_phone" placeholder='Enter your phone number' />
            </Form.Field>
            <Form.Field>
                <label>Email Address</label>
                <input name="user_email" placeholder='Enter your email' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        </>
    )
}

export default LookingToSell