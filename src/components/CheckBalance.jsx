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

export const CheckBalance = () => {
  const navigate = useNavigate();
    const [accountNumber, setaccountNumber] = useState();
    const [accountBalance, getaccountBalance] = useState("");

    const acchandler = (e) => {
      e.preventDefault();
      const fund={accountNumber};
      
      axios.post("http://localhost:8085/softbank/api/checkbalance",fund)
     };

    const balhandler = (f) => {
      f.preventDefault();
      const bal={accountBalance};

      axios.get("http://localhost:8085/softbank/api/checkbalance",bal)
    }
    

  return (
    <Container className="p-4">
        <h2 className="text-center py-3">Check Balance</h2>
      
      <Form onSubmit={acchandler}>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="accountNumber" sm={3} lg={2}>
          Account Number
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="accountNumber"
              name="accountNumber"
              placeholder="Enter Account Number"
              value={accountNumber}
              onChange={(e)=>{
                setaccountNumber(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="accountBalance" sm={3} lg={2}>
          Account Balance
          </Label>

          <Col sm={9} lg={4}>
            <output
              id="accountBalance"
              name="accountBalance"
              placeholder=""
              value={accountBalance}
              onChange={(f)=>{
                getaccountBalance(f.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button onClick={balhandler}>Check Balance</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}
