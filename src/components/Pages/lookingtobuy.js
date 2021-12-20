import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import './index.css';

function LookingToBuy() {

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
            <Button type='submit' value="Send">Submit</Button>
        </Form>
        </>
    )
}

export default LookingToBuy