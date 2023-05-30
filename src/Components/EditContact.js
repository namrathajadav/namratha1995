import React,{useEffect,useState} from 'react';
import Card from './Ui/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classes from './Home.module.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EditContact=()=>{

    const [name,setName]=useState();
    const [number,setNumber]=useState();
    const navigate=useNavigate();

    const {id}=useParams();

    useEffect(()=>{
         axios.get(`http://localhost:3001/Contacts/${id}`)
         .then(res=>{
            console.log(res.data);
            setName(res.data.name);
            setNumber(res.data.phoneNo);
         })
    },[]);

    const submitHandler=(e)=>{
        e.preventDefault();
        const contact={
            id,
            name,
            phoneNo:number
        }
        axios.put(`http://localhost:3001/Contacts/${id}`,contact)
        .then(res=>{
            console.log(res.data);
        })
        setName('')
        setNumber('');
        navigate('/');
    }

    const nameChangeHandler=(e)=>{
           setName(e.target.value)
    }

    const numberChangeHandler=(e)=>{
        setNumber(e.target.value);
    }

    return(
        <Card>
        <form className={classes.input} onSubmit={submitHandler}>
        <label>Id</label>
        <input type='text' value={id} disabled/><br/>
        <label>Name</label>
        <input type='text' value={name} onChange={nameChangeHandler}/><br/>
        <label>Phone Number</label>
        <input type='text'  value={number} onChange={numberChangeHandler}/>
        <Button type='submit' className={classes.button} variant="contained">Update</Button>
    </form>
    </Card>

    )

}

export default EditContact;