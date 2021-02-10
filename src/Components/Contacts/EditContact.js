import React, { useState } from 'react';




const EditContact = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone , setPhone] = useState('')

  /*   const createContact = (e) => {
        e.preventDefault()
        const newContact = {
            id:shortid.generate(),
            name: name ,
            email: email,
            phone:phone
        }
        const { addContactHandler } = props
        addContactHandler(newContact)
        histry.push('/')
    } */

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add your contact</div>
            <div className="card-body">
                <form> 
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
                    <button className = "btn btn-primary"> Create Contact</button>
                </form>
            </div>
        </div>
    );
};



export default EditContact;