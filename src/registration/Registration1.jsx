import "./registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from "react-bootstrap/Form";
import setValidated from "react-bootstrap/Form";
import validated from "react-bootstrap/Form";
import LinkButton from "../components/LinkButton";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Registration1(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div class="register">
      <div class="r1-register">
        <div>
          <ProgressBar animated class="r1-progress" now={25} />
        </div>
        <div class="r1-account">
          <h1>Create your account</h1>
          <Link to="/login">Already have an account? Sign in here instead.</Link>
        </div>

        <div class="r1-username">
          <Form.Group controlId="formBasicEmail" className="inputLabel">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                name="userName"
                value={props.formData.userName}
                onChange={props.handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </div>

        <div class="r1-password">
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="formLabel">Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
                name="password"
                value={props.formData.password}
                onChange={props.handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <div className="r1-password">
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="formLabel">
                Enter the password again
              </Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-describedby="inputGroupPrepend"
                  required
                  name="password2"
                value={props.formData.password2}
                onChange={props.handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </div>
        </div>

        {/*<div class="r1-checkbox">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            </div>
            */}

        <form action="/registration2" className="button-group">
          <LinkButton link="2" label="Continue"></LinkButton>
        </form>
      </div>
    </div>
  );
}

export default Registration1;
