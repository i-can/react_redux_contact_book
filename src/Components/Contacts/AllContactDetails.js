import React from 'react';
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom'



const AllContactDetails = (props) => {
    const { data, deleteContactHandler } = props
    
    const deleteContact = (e) => {
        e.preventDefault()
        deleteContactHandler(data.id)
    }



    return (
        <tr>
        <th>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" />
            <label className=" custom-control-label" />
          </div>
        </th>
            <td>
                <Avatar className="mr-2" name={data.name} size='40' round={true} />
                {data.name}
            </td>
            <td>
                {data.email}
            </td>
            <td>
                {data.phone}
            </td>
            <td className = "action">
                <Link  to ={`/contact/edit/${data.id}`}>
                <span className="material-icons mr-2">edit</span>
                </Link>
                <button className="material-icons  text-danger" onClick = {(e) =>deleteContact(e)}>
                    remove_circle
                </button>
                   
            </td>
     </tr>
    );
};



export default AllContactDetails;