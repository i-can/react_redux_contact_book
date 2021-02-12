import EditContact from "../../Components/Contacts/EditContact";
import {editContacts,updateContact,deleteContact} from './Action'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
   editContactData : state.AddToContactReducer.contact
})

const mapDispatchToProps = (Dispatch) => ({
    editContactHandler: id => Dispatch(editContacts(id)),
    updateContactHandler: updateContacts => Dispatch(updateContact(updateContacts)),  
})


export default connect(mapStateToProps,mapDispatchToProps)(EditContact)



