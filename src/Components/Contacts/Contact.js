import React from 'react';
import AllContactDetails from "./AllContactDetails";


const Contact = (props) => {  
  const { Data} = props
    return (
      <div className = "table_shadow">
        <table className="table">
          <thead>
            <tr>
              <th>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className=" custom-control-label"/>
                </div>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Data.map((data) => (
                <AllContactDetails
                  data={data}
                  key={data.id}
                />))}
          </tbody>
        </table>
      </div>
      
    );
};


export default Contact;