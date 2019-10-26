import React    from 'react';
import NavBar   from './components/NavBar/NavBar';
import {Route} from "react-router-dom";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {

  return (

    <div className="app-wrapper">
          <HeaderContainer/>
          <NavBar/>
          <div className="app-wrapper-content">
              {/*<Route path='/profile' component={Profile} />*/}
              {/*<Route path='/dialogs' component={Dialogs} />*/}

              <Route path='/profile/:userId?' render={ () =>
                  <ProfileContainer
                      // store={props.store}
                  />
              }/>
              <Route path='/dialogs' render={ () =>
                  <DialogsContainer
                      // store={props.store}
                  />
              }/>
              <Route path='/users' render={ () =>
                  <UsersContainer />
              }/>
              <Route path='/login' render={ () =>
                  <LoginPage />
              }/>


          </div>

      </div>
  );
}

export default App;
