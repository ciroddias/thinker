import { Container, Form } from "./styles";

export default function Signup() {
  function handleSignup() {}

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <input placeholder="Enter your username" />
        <input placeholder="Enter your password" />
        <input placeholder="Repeat your password" />
        <button type="submit">think!</button>
      </Form>
    </Container>
  );
}
