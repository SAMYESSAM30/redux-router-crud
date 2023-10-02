import React from 'react'
import { useRouteError, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from 'react-bootstrap'

const ErrorPage = () => {
  const error = useRouteError();
  const Navigate = useNavigate()
  return (
    <div>
      <Container>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <div className='mt-5 text-center'>
              <h1>Oops!</h1>
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                <i>{error.statusText || error.message}</i>
              </p>
              <Button variant="link" onClick={() => Navigate('/', { replace: true })}>Go To Home</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ErrorPage
