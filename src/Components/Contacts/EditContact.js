import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {useHistory} from 'react-router-dom'


const EditContact = (props) => {
    const { editContactHandler, editContactData, updateContactHandler } = props
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    
    const { id } = useParams()
    useEffect(() => {
        if (editContactData != null) {
            setName(editContactData.name)
            setEmail(editContactData.email)
            setPhone(editContactData.phone)
         }

        editContactHandler(id)
    }, [editContactData])
    
    const updateContact = (e) => {
        e.preventDefault()
        const updateContact = Object.assign(editContactData,
            { name: name, email: email, phone: phone })
        updateContactHandler(updateContact)
        history.push('/')
      }


  
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add your contact</div>
            <div className="card-body">
                <form  onSubmit ={(e)=>updateContact(e)}> 
                    <div className="form-group">
                        <input
                            type='text'
                            placeholder="enter your name"
                            className='form-control'
                            value={name}
                            onChange = {(e) =>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type='text'
                            placeholder="enter your Email"
                            className='form-control'
                            value={email}
                            onChange = {(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type='text'
                            placeholder="enter your phone number"
                            className='form-control'
                            value={phone}
                            onChange = {(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button className = "btn btn-warning">update Contact</button>
                </form>
            </div>
        </div>
    );
};



export default EditContact;