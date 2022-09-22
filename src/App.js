
import Header from './components/header';
import Dropdown from './components/dropdown/dropdown';
import Body from './components/body/body';
import Footer from './components/footer';
import Provider, {UserContext} from './components/provider/UserProvider';
import {useContext, useEffect, useState} from 'react';


const  App = () => {

  const {setTarget} = useContext(UserContext);

  window.onclick = function(event) {
    setTarget(event.target);
  }

  return (
    <div className="App">
      <Header />
      <Dropdown />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
