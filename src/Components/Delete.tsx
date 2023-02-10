import axios from "axios";
import { response } from "express";
import React ,{FC,useEffect,useRef,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate, useParams} from 'react-router-dom';

const Delete:FC<any>=()=>{
    // const ID=useRef<HTMLInputElement> (null);
    // const Name=useRef<HTMLInputElement> (null);
    // const Country=useRef<HTMLInputElement> (null);
    // const AnnualIncome=useRef<HTMLInputElement> (null);
    // const Email=useRef<HTMLInputElement> (null);
    
    const param=useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
        
        axios.delete(`https://localhost:7180/UserCrud/${param.id}`)
        .then((response)=>{
              navigate("/");
        });
    },[]);
    return(
      <>
      </>
    );
}

export default Delete;