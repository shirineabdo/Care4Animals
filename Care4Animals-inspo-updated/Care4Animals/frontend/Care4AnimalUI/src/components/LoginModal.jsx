import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./LoginModal.css";

function LoginModal({ isOpen, toggle, openRegister }) {
  
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>

      <ModalHeader toggle={toggle}>
        Welcome Back
        <p className="login-subtitle">Login to your account.</p>
      </ModalHeader> 
      
      <ModalBody>
        <Form>
          <FormGroup>
            
            <Label for="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </FormGroup>

          <Button color="success" className="w-100">
            Login
          </Button>

        </Form>

        <p className="register-text">Don't have an account?
            <span className="create-account-link" onClick={openRegister}>
           Create one
            </span>
        </p> 
  
      </ModalBody>

    </Modal>
  );
}

export default LoginModal;