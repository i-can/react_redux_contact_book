import Contact from "../../Components/Contacts/Contact";
import { connect } from 'react-redux'



const mapStateToProps = (state) => ({
    Data: state.AddToContactReducer.Contacts
})

const mapDispatchToProps = (Dispatch) => ({
    
    
})


export default connect(mapStateToProps,mapDispatchToProps)(Contact)



