import  React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

 
  
const ContactItem = (props) => {

    const navigate=useNavigate();

    const editContact=()=>{
        navigate(`/edit/${props.id}`)
}

const deleteContact=()=>{
   axios.delete(`http://localhost:3001/Contacts/${props.id}`).then(res=>{
    navigate('/'); 
   })
}

  
    
    return(
   <div>
    <span>
      
    <p>{props.name}</p>
    <p>{props.phoneNo}</p>
    </span>
    <div>
    <Button variant="contained" size='small' color='success'>View</Button>
    <Button variant="contained" size='small' onClick={editContact}>Edit</Button>
    <Button variant="contained" size='small' color='error' onClick={deleteContact}>Delete</Button>
      </div>
    <Divider/>
    </div>
    )
}

export default ContactItem;