import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import './index.css'


function LookingToBuy() {
    return (
        <>
        <h1>Looking to Buy?</h1>
        <div>
            <p className='buyText'>If you're looking to buy a property in the Tampa area, look no further. We're here to help you find your dream home, all you need to do is fill out the form below and we'll be in touch soon.</p>
        </div>
        <Form className="formSizing">
            <Form.Field>
                <label>Full Name</label>
                <input placeholder='Enter your full name' />
            </Form.Field>
            <Form.Field>
                <label>Phone Number</label>
                <input placeholder='Enter your phone number' />
            </Form.Field>
            <Form.Field>
                <label>Email Address</label>
                <input placeholder='Enter your email' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        </>
    )
}

export default LookingToBuy