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

export const Atmpin = () => {
  const navigate = useNavigate();
    const [oldpin, setoldpin] = useState();
    const [newpin, setnewpin] = useState("");
    const [confirmpin, setconfirmpin] = useState("");
    

  return (
    <Container className="p-4">
        <h2 className="text-center py-3">ATM Pin Change</h2>
      
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="oldpin" sm={3} lg={2}>
          Old Pin
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="oldpin"
              name="oldpin"
              placeholder="Enter your old ATM Pin"
              value={oldpin}
              onChange={(e)=>{
                setoldpin(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="newpin" sm={3} lg={2}>
          New Pin
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="newpin"
              name="newpin"
              placeholder="Enter your new Pin"
              value={newpin}
              onChange={(f)=>{
                setnewpin(f.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="confirmpin" sm={3} lg={2}>
          Confirm Pin
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="confirmpin"
              name="confirmpin"
              placeholder="Enter your new Pin again"
              value={confirmpin}
              onChange={(f)=>{
                setconfirmpin(f.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button>Change Pin</Button>
          </Col>
        </FormGroup>
    </Container>
  )
}
