import React from 'react'
import { Row, Col, PageHeader } from 'react-bootstrap'

const Dashboard = (props) => (
  <Row>
    <Col xs={12}>
      <PageHeader>
        Welcome <small>to Beacon</small>
      </PageHeader>
    </Col>
  </Row>
)

export default Dashboard