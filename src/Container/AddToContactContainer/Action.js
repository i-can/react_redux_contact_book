import {CREATE_CONTACT,EDIT_CONTACT,UDDATE_CONTACT, DELETE_CONTACT} from './Constant'

export const addContacts = (Contact) => {
    return{
        type: CREATE_CONTACT,
        payload:Contact
    }
}


export const editContacts = (id) => {
    return {
        type: EDIT_CONTACT,
        payload: id
        
     }
}
 
export const updateContact = (updatedcontact) => {
    return {
        type: UDDATE_CONTACT,
        payload: updatedcontact
        
    }
}

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload:id
    }
}

