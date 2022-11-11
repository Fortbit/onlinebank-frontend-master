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

export const Fundtransfer = () => {
  const navigate = useNavigate();
    const [fromaccount, setfromaccount] = useState();
    const [benefec, setbenefec] = useState("");
    const [benefecaccno, setbenefecaccno] = useState("");
    const [benefecifsc, setbenefecifsc] = useState("");
    const [benefecacctype, setbenefecacctype] = useState("");
    const [amount,setamount] = useState("");
  


    const fundHandler = (e) => {
      e.preventDefault();
      const fund={fromaccount,benefec,benefecaccno,benefecifsc,benefecacctype,amount};
      
      axios.post("http://localhost:8085/softbank/api/fundtransfer",fund).then((res)=>{
          if(res.data){
            alert("Transfered Successfully");
            navigate("/menu");
          }
        })
     };
    

  return (
    <Container className="p-4">
        <h2 className="text-center py-3">Transfer</h2>
      
      <Form onSubmit={fundHandler}>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="fromaccount" sm={3} lg={2}>
          From Account
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="fromaccount"
              name="fromaccount"
              placeholder="Enter Account Number"
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
          <Label for="benefecaccno" sm={3} lg={2}>
          Benificiary Account Number
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="benefecaccno"
              name="benefecaccno"
              placeholder="Enter Benificiary Account Number"
              value={benefecaccno}
              onChange={(e)=>{
                setbenefecaccno(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="benefecifsc" sm={3} lg={2}>
          Benificiary IFSC code
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="benefecifsc"
              name="benefecifsc"
              placeholder="enter benificiary ifsc code"
              value={benefecifsc}
              onChange={(e)=>{
                setbenefecifsc(e.target.value);
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
              placeholder="Enter amount"
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
          <Label for="benefec" sm={3} lg={2}>
          Benificiary
          </Label>

          <Col sm={9} lg={4}>
           
            <select id="benefec" onChange={(e)=>setbenefec(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="select benefec">Select a Beneficiary</option>
                    <option value="mother" >Mother</option>
                    <option value="father">Father</option>
                    <option value="husband/wife">Husband/ Wife</option>

              </select>
              {/* {console.log("option check "+securityquestion)} */}
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
    
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="benefecacctype" sm={3} lg={2}>
          Benificiary Account Type
          </Label>

          <Col sm={9} lg={4}>
          <select id="benefecacctype" onChange={(e)=>setbenefecacctype(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="benificiary account type">benificiary account type</option>
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
            <Button>Transfer</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}
