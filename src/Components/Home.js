import  React,{useState,useEffect} from 'react';
import Card from './Ui/Card';
import classes from './Home.module.css';
import Button from '@mui/material/Button';
import axios from 'axios';
import Contacts from './Contacts';

export default function Home() {
    const [enteredName,setEnteredName]=useState();
    const [phoneNo,setPhoneNo]=useState();
    const [contacts,setContacts]=useState([]);

    useEffect(()=>{
      axios.get('http://localhost:3001/Contacts')
      .then(res=>{
        return res.data
      }).then(data=>{
           setContacts([...data]);
      })
    },[enteredName])
    

    const submitHandler=(e)=>{
       e.preventDefault();
      const contact={
        id:Math.random().toString(),
        name:enteredName,
        phoneNo
      };
      axios.post('http://localhost:3001/Contacts',contact)
      .then(res=>{
         return res.data
      }).then(data=>{
         
      })
      setEnteredName('');
      setPhoneNo('');
    }

    const nameChangeHandler=(e)=>{
        setEnteredName(e.target.value);
    }

    const numberChangeHandler=(e)=>{
        setPhoneNo(e.target.value);
    }

  return (
    <>
    <Card>
    <form onSubmit={submitHandler} className={classes.input}>
        <label>Name</label>
        <input type='text' onChange={nameChangeHandler} value={enteredName}/><br/>
        <label>Phone Number</label>
        <input type='text'  onChange={numberChangeHandler} value={phoneNo}/>
        <Button type='submit' className={classes.button} variant="contained">ADD CONTACT</Button>
    </form>
    </Card>
    <Card>
       <Contacts users={contacts}/>
    </Card>
    </>
  );
}