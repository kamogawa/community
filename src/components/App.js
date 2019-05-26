import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import NavBar from './Nav'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <NavBar />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App