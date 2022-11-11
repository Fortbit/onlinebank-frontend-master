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

export const Login = () => {
  const navigate = useNavigate();
    const [accountnumber, setaccountnumber] = useState();
    const [password, setpassword] = useState("");

    const loginHandler = (e) => {
      e.preventDefault();
      const lg = JSON.stringify({accountNumber: accountnumber, password });

	  console.log(lg)

	  const options = {
		headers: {"content-type": "application/json"}
		}

	fetch("http://localhost:8085/softbank/login", {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			Accept: "*/*"
		},
		body: lg
	}).then((response) => response.json())
	.then((responseJson) => {
		alert("Login Successfull");
         navigate("/menu");
	})
     };
    

  return (
    <Container className="p-4">
        <h2 className="text-center py-3">Login</h2>
      
      <Form onSubmit={loginHandler}>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="accountnumber" sm={3} lg={2}>
          Account Number
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="accountnumber"
              name="accountnumber"
              placeholder="Enter Account Number"
              value={accountnumber}
              onChange={(e)=>{
                setaccountnumber(e.target.value);
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
              placeholder="Enter your Password"
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button onClick={loginHandler}>Log In</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}
