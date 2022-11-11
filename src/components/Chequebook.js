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
  FormText,
  Button,
  Dropdown,
} from "reactstrap";

export const Chequebookreq = () => {
  const navigate = useNavigate();
  
    const [account_number, setaccount_number] = useState("");
    const [priority, setpriority] = useState("");

    const cbHandler = (e) => {
      e.preventDefault();
      const cb={account_number,priority};

      axios.post("http://localhost:8085/softbank/api/newchequebook",cb).then((res)=>{
          if(res.data){
            alert("Request Successfull");
            navigate("/menu");
          }
        })
     };
    

  return (
    <Container className="p-4">
        <h2 className="text-center py-3">Cheque Book Request</h2>
      
      <Form onSubmit={cbHandler}>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="account_number" sm={3} lg={2}>
          Account Number
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="account_number"
              name="account_number"
              placeholder="Enter Account Number"
              value={account_number}
              onChange={(e)=>{
                setaccount_number(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="priority" sm={3} lg={2}>
          Priority
          </Label>

          <Col sm={9} lg={4}>
           
            <select id="priority" onChange={(e)=>setpriority(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="select priority">Select Priority</option>
                    <option value="high" >High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>

              </select>
              {/* {console.log("option check "+securityquestion)} */}
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
