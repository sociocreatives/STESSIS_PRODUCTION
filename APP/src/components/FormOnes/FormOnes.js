import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Section,
  Container,
  Topbar,
  Cons,
  ConsTwo,
  FormsMain,
  FormGroup,
  Button
} from "./FormOneElements";

function FormOnes() {
  return (
    <Section>
      <Container>
        <Topbar>
          <Cons>
            <Link to="/symptoms">
              <FaAngleLeft />
            </Link>
          </Cons>
          <ConsTwo>
            <h3>Health Check</h3>
          </ConsTwo>
        </Topbar>
        <FormsMain>
          <h3>Fill Basic Details</h3>
          <p>Before using the checkup, please fill your basic information</p>
          <FormGroup>
            <input type="text" name="name" placeholder="Enter Full Name" />
          </FormGroup>
          <FormGroup>
            <select>
              <option selected value="female">
                Female
              </option>
              <option value="male">Male</option>
              <option selected value="selectgender">
                Select Gender
              </option>
            </select>
          </FormGroup>
          <FormGroup>
            <input type="text" name="idnumber" placeholder="Enter ID Number" />
          </FormGroup>
          <FormGroup>
            <input type="text" name="age" placeholder="Enter Age" />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              name="phone"
              placeholder="Enter Cellphone Number"
            />
          </FormGroup>
          <FormGroup>
            <input type="email" name="email" placeholder="Enter Email" />
          </FormGroup>

          <FormGroup>
            <input type="submit" value="Submit" className="submitbutton" />
          </FormGroup>
          <Button>Next</Button>
        </FormsMain>
      </Container>
    </Section>
  );
}

export default FormOnes;
