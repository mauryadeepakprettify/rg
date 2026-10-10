"use client"
import React from 'react'
import Input from '../atoms/Input'
import Textarea from '../atoms/Textarea'
import Button from '../atoms/Button'

const EnquireFields = () => {
    return (
        <form className="form form-grid">
            <Input label="First Name*" name="name" id="name" type="text" />
            <Input label="Last Name*" name="name" id="name" type="text" />
            <Input label="Phone*" name="name" id="name" type="number" />
            <Input label="Email*" name="name" id="name" type="email" />
            <Textarea label="Message" name="message" id="message" />
            <div className="btn-container full">
                <Button className="btn-animate">Schedule a Site Visit</Button>
            </div>
        </form>
    )
}

export default EnquireFields