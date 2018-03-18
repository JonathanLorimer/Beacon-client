import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import TopNav from './TopNav'
import Diary from './Diary'
import Achievements from './Achievements'
import Regions from './Regions'
import Dashboard from './Dashboard'
import Userlogin from './Userlogin'


/*
This is the main app component. Note that we're using react-router to change
*part* of the screen - the <TopNav> component stays put. The component that
ends up inside <Grid> is determined by the current browser URL. See
https://reacttraining.com/react-router/web/example/basic for more details.
*/


class App extends Component {
 constructor(props){
   super(props)

   this.state = {
     is_login: false,
     currentUser: "none",
     currentUser_id: null,

     completedAchievements: {
       locations: {},
       neighbourhoods: {},
       cities: {},
       regions: {},
       countries: {}
     }

   }
 }

 handleLogin = (data) => {
    this.setState({is_login: true, currentUser: data[0].username, completedAchievements: data[1]})
 }

 handleLogout = () => {
   this.setState({is_login: false,
     completedAchievements: {
       locations: {},
       neighbourhoods: {},
       cities: {},
       regions: {},
       countries: {}
     }})
 }


 render() {


   return(
     <div>
       <TopNav auth={this.state.is_login} currentUser={this.state.currentUser} onLogout={this.handleLogout} />
       <Grid>
         <Switch>
           <Route path="/" exact component={Dashboard} />
           <Route path="/userlogin" render={()=>
                   <Userlogin onLogin={this.handleLogin} auth={this.state.is_login} currentUser={this.state.currentUser}/>} />
           <Route path="/achievements" render={(props)=>
                    <Achievements {...this.props} auth={this.state.is_login} currentUser={this.state.currentUser} completedAchievements={this.state.completedAchievements}/>} />
           <Route path="/diary" render={(props)=>
                    <Diary {...this.props} auth={this.state.is_login} currentUser={this.state.currentUser}/>} />
         </Switch>
       </Grid>
     </div>
   )
 }
}

export default App