import AddContact from "../../Components/Contacts/AddContact";
import {addContacts} from './Action'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = (Dispatch) => ({
    addContactHandler : contact => Dispatch(addContacts(contact))
    
})


export default connect(mapStateToProps,mapDispatchToProps)(AddContact)



