import React from 'react'
import { Row, Col, PageHeader, Table } from 'react-bootstrap'
import { Route, Redirect, Switch, Link } from 'react-router-dom'
import Resource from '../models/resource'

const users = Resource("sessions")

class Userlogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",

    };
  }


//    checkLogin(data) {
//     users.create(data)

//       .then((result) => this.setState({
//         username:result.data.username }))
//       .catch((errors) => this.setState({ errors: errors }))
//    }




//   render(){

//     const onSubmit = e => {
//       e.preventDefault();
//       let email = e.target.email.value;
//       let password = e.target.password.value;
//       this.checkLogin({email, password})
//     }

//     return (
//       <div>
//         <div> Logged in as {this.state.username} </div>
//           <form className="form" onSubmit={onSubmit}>

//               <label>
//                 email:
//                 <input type="text" name="email" />
//               </label>
//               <label>
//                 password:
//                 <input type="text" name="password" />
//               </label>
//               <input type="submit" value="Submit" />
//          </form>
//       </div>

//     );

//   }

// }

   postSession(event) {
    event.preventDefault()
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
      .then((response) => {console.log("Post Session Response: ", response)})
      .catch((error) => {console.log("Error in the Post Session fetch: ", error)})
   }

   render () {

      return(

        <div>
          <h1>Login</h1>
          <div>Log in as {this.state.username}</div>
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