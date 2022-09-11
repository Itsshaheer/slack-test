import React, {useEffect} from 'react';
import './App.css';
import{ Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import {useDispatch} from 'react-redux'
import {auth} from './Utils/firebase'
import { setuser } from './redux/actions';
import Checkout from './pages/Checkout';
import SingleProduct from './pages/SingleProduct';
import CheckOutProduct from './components/CheckOutProduct';
function App() {
  let dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(setuser(authUser))
      } else {
        dispatch(setuser(null))
      }
    })
  }, [dispatch])
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path='/checkout'>
          <Header />
          <Checkout />
      
          </Route>
      <Route  path= '/product/:id'>
               <Header />
               <SingleProduct/>
               </Route>
       
        <Route   path= '/register'>
          <Register />
           </Route>
           <Route   path='/login'>
             <Login />
             </Route>
             <Route  path= '/'>
               <Header />
               <Home />
               </Route>
      
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
