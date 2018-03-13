import React from 'react'
import { Row, Col, PageHeader, Table } from 'react-bootstrap'
import { Route, Redirect, Switch, Link } from 'react-router-dom'

// Client-side model
import Resource from '../models/resource'
const ClientStore = Resource('users')

class Diary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: [],
      errors: null

    }
  }

  componentWillMount() {
    ClientStore.findAll()
      .then((result) => this.setState({ clients: result.data }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  render() {
    if(this.props.auth && this.props.currentUser.data !=="failed"){
      return (
        <Row>
          <Col xs={12}>

            <PageHeader>
              Clients
            </PageHeader>

            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                {this.state.clients.map((client, index) => (
                  <tr key={index}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )
    } else {
       return <Redirect to='/userlogin'/>
    }
  }
}

export default Diary