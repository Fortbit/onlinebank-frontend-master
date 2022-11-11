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


export const Newfd = () => {
  const navigate = useNavigate();

    const [fromaccount, setfromaccount] = useState();
    const [fdperiod, setfdperiod] = useState("");
    const [amount,setamount] = useState("");
    const [fdproduct,setfdproduct]=useState("")


    const fdHandler = (e) => {
      e.preventDefault();
      const fd={fromaccount,amount,fdperiod,fdproduct};
      // setIsSubmit(true);
      axios.post("http://localhost:8085/softbank/api/fixeddeposits",fd).then((res)=>{
          if(res.data){
            console.log("fd");
            alert("created successfully");
            navigate("/menu");
          }
        })
     };
    

  return (
    <Container className="p-4">
        <h2 className="text-center py-3">Open New FD</h2>
      
      <Form onSubmit={fdHandler}>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="fromaccount" sm={3} lg={2}>
          From account
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="fromaccount"
              name="fromaccount"
              placeholder="From Account"
              value={fromaccount}
              onChange={(e)=>{
                setfromaccount(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="amount" sm={3} lg={2}>
          Amount
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="amount"
              name="amount"
              placeholder="Amount"
              value={amount}
              onChange={(e)=>{
                setamount(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="fdperiod" sm={3} lg={2}>
          FD Period
          </Label>

          <Col sm={9} lg={4}>
           
            <select id="fdperiod" onChange={(e)=>setfdperiod(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="select fdperiod">Select FD Period</option>
                    <option value="1 years" >1 years</option>
                    <option value="3 years">3 years</option>
                    <option value="5 years">5 years</option>

              </select>
              {/* {console.log("option check "+securityquestion)} */}
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        
        
        
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="fdproduct" sm={3} lg={2}>
          FD Product
          </Label>

          <Col sm={9} lg={4}>
          <select id="fdproduct" onChange={(e)=>setfdproduct(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="fdproduct">FD Product</option>
                    <option value="current account" >current account</option>
                    <option value="savings account">savings account</option>
                    <option value="business account">business account</option>

              </select>
              {/* {console.log("option check "+securityquestion)} */}
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button>Register</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}

