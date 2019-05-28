import React from 'react'
import Nav from './Nav'
import Comment from './Comment'
import Add from './Add'
import About from './About'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/add" component={Add} />
        <Route path="/comment" component={Comment} />
      </Switch>
    </div>
  </Router>
)

export default App