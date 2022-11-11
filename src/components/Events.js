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

export
const Event = () => {
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [mobileno, setmobileno] = useState("");
    const [emailid, setemailid] = useState("");
    const [event,setevent] = useState("");
    
    

  return (
    <Container className="p-4">
      <h2 className="text-center py-3">Register for an Event</h2>
      <Form>
        <FormGroup row >
          <Col lg={3}></Col>
          <Label for="name" sm={3} lg={2}>
            Name
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>{
                setname(e.target.value);
              }}
              type="text"
              style={{width:"70%",padding:"7px",borderRadius:"9px"}}/>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="address" sm={3} lg={2}>
            Address
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="address"
              name="address"
              placeholder="Enter your Address"
              value={address}
              onChange={(e)=>{
                setaddress(e.target.value);
              }}
              type="text"
              style={{width:"70%",padding:"7px",borderRadius:"9px"}}/>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="mobileno" sm={3} lg={2}>
            Mobile No
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="mobileno"
              name="mobileno"
              placeholder="Enter your Mobile Number"
              value={mobileno}
              onChange={(e)=>{
                setmobileno(e.target.value);
              }}
              type="text"
              style={{width:"70%",padding:"7px",borderRadius:"9px"}}/>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="emailid" sm={3} lg={2}>
          E-mail Id
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="emailid"
              name="emailid"
              placeholder="Enter your Email Id"
              value={emailid}
              onChange={(e)=>{
                setemailid(e.target.value);
              }}
              type="text"
              style={{width:"70%",padding:"7px",borderRadius:"9px"}}/>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        
        
        
        
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="event" sm={3} lg={2}>
          Events
          </Label>

          <Col sm={9} lg={4}>
          <select id="event" onChange={(e)=>setevent(e.target.value)} style={{width:"80%",padding:"7px",borderRadius:"9px"}}>
                    <option value="Choose Event">Choose Event</option>
                    <option value="meetgreet 22/11/22" >How we Bank   - 22/11/22</option>
                    <option value="exhibition 23/11/22">Funds Managements   - 23/11/22</option>
                    <option value="business meet 24/11/22">What to do after "60"   - 24/11/22</option>

              </select>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button style={{width:"30%",padding:"4px",borderRadius:"3px"}}>Register</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default Event