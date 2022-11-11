import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";

export const UserRegistration = () => {
  const navigate = useNavigate();
    const [fname, setfname] = useState("");
    const [middle_name, setmiddle_name] = useState("");
    const [lname, setlname] = useState("");
    const [user_name, setuser_name] = useState("");
    const [password, setpassword] = useState("");
    const [securityQuestions, setsecurityQuestions] = useState("");
    const [securityAnswers, setsecurityAnswers] = useState("");
    const [accountTypeID, setaccountTypeID] = useState("");
    const [mobilenumber, setmobilenumber] = useState("");
    const [message,setMessage] = useState("");


    function handleSubmit(event){
      event.preventDefault();

      var data=JSON.stringify({
        fname:fname,
        middle_name:middle_name,
        lname:lname,
        user_name:user_name,
        password:password,
        securityQuestions:securityQuestions,
        securityAnswers:securityAnswers,
        accountTypeID:accountTypeID,
        mobilenumber:mobilenumber
      });

      var config={
        method:"post",
        url:"http://localhost:8085/softbank/api/user",
        headers:{
          "Content-Type": "application/json"
        },
        data:data,
      };

      axios(config)
      .then(function(res){
        alert("Registration successful");
        navigate("/");
      })
      .catch(function(error){
        console.log(error);
        setMessage("Something went wrong");
      })
    }   

  return (
    <Container className="p-4">
        <h2 className="text-center py-3">User Registration</h2>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="fname" sm={3} lg={2}>
          First Name
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="fname"
              name="fname"
              placeholder="Enter your First Name"
              value={fname}
              onChange={(e)=>{
                setfname(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="middle_name" sm={3} lg={2}>
          Middle Name
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="middle_name"
              name="middle_name"
              placeholder="Enter your Middle Name"
              value={middle_name}
              onChange={(e)=>{
                setmiddle_name(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="lname" sm={3} lg={2}>
          Last Name
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="lname"
              name="lname"
              placeholder="Enter your Last Name"
              value={lname}
              onChange={(e)=>{
                setlname(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="user_name" sm={3} lg={2}>
          User Name
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="user_name"
              name="user_name"
              placeholder="Enter Username"
              value={user_name}
              onChange={(e)=>{
                setuser_name(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="password" sm={3} lg={2}>
          Password
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="password"
              name="password"
              placeholder="Enter a new password"
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="securityQuestions" sm={3} lg={2}>
          Security Question
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="securityQuestions"
              name="securityQuestions"
              placeholder="Enter your Security Question"
              value={securityQuestions}
              onChange={(e)=>{
                setsecurityQuestions(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="securityAnswers" sm={3} lg={2}>
          Security Answer
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="securityAnswers"
              name="securityAnswers"
              placeholder="Enter your Security Answer"
              value={securityAnswers}
              onChange={(e)=>{
                setsecurityAnswers(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="accountTypeID" sm={3} lg={2}>
          Account Type ID
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="accountTypeID"
              name="accountTypeID"
              placeholder="Enter your Account Type ID"
              value={accountTypeID}
              onChange={(e)=>{
                setaccountTypeID(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="mobileNumber" sm={3} lg={2}>
          Mobile Number
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Enter your Mobile Number"
              value={mobilenumber}
              onChange={(e)=>{
                setmobilenumber(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
    
        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button>Submit Request</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}
