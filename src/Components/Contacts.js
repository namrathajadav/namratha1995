import  React from 'react';
import ContactItem from './ContactItem';


const Contacts = (props) => {

 
    return(
   <>
    {
        props.users.map((user)=> <ContactItem name={user.name} id={user.id} phoneNo={user.phoneNo} />)
    }
   </>
    )
}

export default Contacts;