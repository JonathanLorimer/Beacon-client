import React from 'react'
import { Row, Col, PageHeader, Table } from 'react-bootstrap'
import { Route, Redirect, Switch, Link } from 'react-router-dom'
import Resource from '../models/resource'
const user = Resource("sessions")

class Userlogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      redirect: false

    };
  }


   postSession(event) {
    event.preventDefault()
    let self = this;
    fetch('http://localhost:3000/sessions',
      {
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/vnd.api+json'
      },
      method: 'post',
      body: new FormData(document.getElementById("login-form"))
      }
    )
      .then((response) => response.json())
      .then((data) => {console.log(data);

        this.props.onLogin(data.data)
        this.setState({ username: data.username, redirect: true })
        // self.props.history.push("/achievements")
      })
      .catch((error) => {console.log("Error in the Post Session fetch: ", error)})
   }


   render () {


      if (this.state.redirect){
        return <Redirect to='/achievements'/>
      }

      return(

        <div>
          <h1>Login</h1>
          <form id="login-form" onSubmit={(event) => this.postSession(event)}>
            <label htmlFor="email">email </label><br/>
            <input type="text" id="email"  name="email"/><br/>
            <label htmlFor="password">Password </label><br/>
            <input type="password" id="password" name="password"/><br/>
            <input type="submit" value="Login"/>
          </form>
        </div>

        )
  }



}



export default Userlogin;