import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
const [validationStates, setValidationStates] = useState({emailState: false})


const handleEmailChange = ((e) => {
  setFormValues({...formValues, email: e.target.value})
  setValidationStates({...validationStates, emailState: false})
});

const handlePasswordChange = ((e) => {
  setFormValues({...formValues, password: e.target.value})
  setValidationStates({...validationStates, passwordState: true})
});

const handleSelectChange = ((e) => {
  setFormValues({...formValues, favClass: e.target.value})
});

const validateEmail = ((email) => {
  if (email.includes("@")){
    setValidationStates({...validationStates, emailState: true})
    return true;
  }
  return false;
});

const validatePassword = (password) => password.length >= 9 && password.match(/[a-z]/i) && password.match(/[0-9]/)

const clickSubmit = (() => {
  validateEmail(formValues.email)
});




  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
     
      <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} isValid={validationStates.emailState} isInvalid={!validationStates.emailState}/>
        { !validationStates.emailState && <Form.Text className="text-muted">Your email should have a @</Form.Text>}
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password } isValid={validatePassword(formValues.password)} isInvalid={!validatePassword(formValues.password)}/>
        { !validatePassword(formValues.password) && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Favorite Class</Form.Label>
        <Form.Select onChange={handleSelectChange}>
          <option value="1">ISIS3710</option>
          <option value="2">Programación con tecnologias web</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={clickSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;

