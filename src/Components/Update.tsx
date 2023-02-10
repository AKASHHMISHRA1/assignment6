import axios from "axios";
import { response } from "express";
import React ,{FC,useEffect,useRef,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate, useParams} from 'react-router-dom';

const Update:FC<any>=()=>{
    //const ID=useRef<HTMLInputElement> (null);
    const Name=useRef<HTMLInputElement> (null);
    const Country=useRef<HTMLInputElement> (null);
    const AnnualIncome=useRef<HTMLInputElement> (null);
    const Email=useRef<HTMLInputElement> (null);
    
    const param=useParams();
    const navigate=useNavigate();
    function UpdateUserData(){
        // console.log(Name.current?.value);
        // console.log(Country);
        const email=Email.current?.value.split(',');
        var payload={
            Id:param.id,
            name: Name.current?.value,
            country:Country.current?.value,
            annualIncome: AnnualIncome.current?.value,
            emailIdsList: email
        };
        
        axios.put("https://localhost:7180/UserCrud",payload)
        .then((response)=>{
              navigate("/");
        });
    }
    return(
      <Form>
      {/* <Form.Group className="mb-3" controlId="formID">
        <Form.Label>ID:</Form.Label>
        <Form.Control type="text" ref={ID}/>

      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" ref={Name}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>Country:</Form.Label>
        <Form.Control type="text" ref={Country}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>AnnualIncome:</Form.Label>
        <Form.Control type="number" ref={AnnualIncome}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" ref={Email}/>
      </Form.Group>
      
      <Button variant="primary" type="button" onClick={UpdateUserData}>
        Submit
      </Button>
    </Form>
    );
}

export default Update;