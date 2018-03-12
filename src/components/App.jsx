import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import TopNav from './TopNav'
import Diary from './Diary'
// import Achievements from './Achievements'
import Regions from './Regions'
import Dashboard from './Dashboard'

/*
This is the main app component. Note that we're using react-router to change
*part* of the screen - the <TopNav> component stays put. The component that
ends up inside <Grid> is determined by the current browser URL. See
https://reacttraining.com/react-router/web/example/basic for more details.
*/

const App = (props) => (
  <div>
    <TopNav />
    <Grid>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/achievements" component={Regions} />
        <Route path="/diary" component={Diary} />
      </Switch>
    </Grid>
  </div>
)

export default App