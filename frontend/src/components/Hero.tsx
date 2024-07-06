import { Button, Card, Container } from "react-bootstrap"

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p>
            This is a MERN Authentication app that stores a JWT in a HTTP-Only cookie.
            It also uses Redux Toolkit and React Bootstrap libraries.
          </p>
          <div className="d-flex">
            <Button href="/login" variant="primary" className="me-3">Sign In</Button>
            <Button href="/register" variant="secondary">Sign Up</Button>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Hero