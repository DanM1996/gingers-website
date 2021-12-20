import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import './index.css'
function LookingToSell() {
    return (
        <>
        <h1>Looking to Sell?</h1>
        <div>
            <p className='sellText'>If you're looking to sell your home and need a realtor, we're happy to help you. All you need to do is fill out the form below with the required information and we'll be in touch with you.</p>
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

export default LookingToSell