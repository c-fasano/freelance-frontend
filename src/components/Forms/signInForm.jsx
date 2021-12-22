import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
    
const SignInForm = (props) => {
  return (
    <div className="new-user">
      <h2>Sign In</h2>
      <Form className="form">
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
          />
        </FormGroup>
      <Button>Submit</Button>
    </Form>
</div>
  )
}

export default SignInForm