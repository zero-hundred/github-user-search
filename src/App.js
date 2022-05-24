import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Search, Users, User, Alert, About } from './components/Components';
import GitHubState from './context/github/GitHubState';
import './styles/App.scss';

const App = () => {  
  return (
    <GitHubState>
      <Router>
        <div className="App">
          <Navbar />

          <main className="container">
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
          </main>
          
        </div>
      </Router>
    </GitHubState>
  )
}

export default App;
