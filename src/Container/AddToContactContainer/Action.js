import {CREATE_CONTACT} from './Constant'

export const addContacts = (Contact) => {
    return{
        type: CREATE_CONTACT,
        payload:Contact
    }
}

