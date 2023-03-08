import React, { Component } from 'react'
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import Success from './success';
import Code from './Code';




export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Link to='/success'>success</Link>
      <Routes>
        <Route path='/success' element={<Success></Success>}></Route>
        <Route path='/code' element={<Code></Code>}></Route>
      </Routes>
      </BrowserRouter>
    )
    https://github.com/harishkann/hi.git
    
  }
}

export default App