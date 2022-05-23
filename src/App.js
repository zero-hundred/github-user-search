import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Search, Users, User, Alert, About } from './components/index';
import GitHubState from './context/github/GitHubState';
import './App.scss';

const App = () => {  
  return (
    <GitHubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Routes> 
              <Route exact path='/' 
              element={
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              }/>
              <Route exact path='/about' element={ <About /> } />
              <Route exact path='/user/:login' element={ <User /> }/>
            </Routes>
          </div>

        </div>
      </Router>
    </GitHubState>
  )
}

export default App;
