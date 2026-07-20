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
import "./RegisterModal.css";

function RegisterModal({ isOpen, toggle, openLogin }) {

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>

      <ModalHeader toggle={toggle}>
        Join Our Community
      </ModalHeader>


      <ModalBody>

        <p className="login-subtitle">
          Create your account and help animals find their way home.
        </p>


        <Form>

          <FormGroup>
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="Your Full Name"
            />
          </FormGroup>


          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="you@example.com"
            />
          </FormGroup>


          <FormGroup>
            <Label>Phone Number</Label>
            <Input
              type="tel"
              placeholder="eg:70758137"
            />
          </FormGroup>


          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="At least 6 characters"
            />
          </FormGroup>


          <FormGroup>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="Confirm your password"
            />
          </FormGroup>


          <Button color="success" className="w-100">
            Create Account
          </Button>

        </Form>
        <p className="register-footer">
  Already have an account?{" "}
  <span className="login-link" onClick={openLogin}>
    Login
  </span>
</p>

      </ModalBody>

    </Modal>
  );
}


export default RegisterModal;