import Contact from "../../Components/Contacts/Contact";
import { deleteContact } from "../AddToContactContainer/Action";
import { connect } from 'react-redux'



const mapStateToProps = (state) => ({
    Data: state.AddToContactReducer.Contacts
})

const mapDispatchToProps = (Dispatch) => ({
    deleteContactHandler : (id) => Dispatch(deleteContact(id))   
})


export default connect(mapStateToProps,mapDispatchToProps)(Contact)



