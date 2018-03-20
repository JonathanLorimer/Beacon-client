import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import TopNav from './TopNav'
import Diary from './Diary'
import Achievements from './Achievements'
import Regions from './Regions'
import Dashboard from './Dashboard'
import Userlogin from './Userlogin'
import Resource from '../models/resource'

const Updates = Resource('users', 'updates')

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

  componentDidMount() {
    setInterval(() => {
      Updates.findAllChildren(1)
        .then((result) => {
          console.log(this.state.completedAchievements)
          let newCompletedAchievements = this.state.completedAchievements
          let foundLocation = []


          for (let location in newCompletedAchievements.locations) {
            if (newCompletedAchievements.locations[location].name === result.data.name) {
              foundLocation.push(location)
            }
          }
          console.log('foundLocation before', foundLocation)
          if(foundLocation.length === 0 && result.data.name) {
            console.log('foundLocation after', foundLocation)
            newCompletedAchievements.locations[Object.keys(newCompletedAchievements.locations).length] = result.data
            this.setState({ completedAchievements: newCompletedAchievements })           
          }

        })
    }, 5000)   
  }

 handleLogin = (data) => {

  let newCompletedAchievements = data[1]
  let newLocationsVisited = data[2]

   for (let location in newCompletedAchievements.locations){
     for (let visitedLocation of newLocationsVisited){
       if(newCompletedAchievements.locations[location].name === visitedLocation.name){
         newCompletedAchievements.locations[location].created_at = visitedLocation.visited_at
       }
     }
   }


  this.setState({is_login: true, currentUser: data[0].username, completedAchievements: newCompletedAchievements})
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
             <Diary {...this.props} auth={this.state.is_login} currentUser={this.state.currentUser} completedAchievements={this.state.completedAchievements}/>} />
         </Switch>
       </Grid>
     </div>
   )
 }
}

export default App