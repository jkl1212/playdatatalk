import React, {useState} from 'react';
import AppRouter from 'components/Router';
import {authService} from 'fBase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  console.log(authService.currentUser);
  setInterval(() => {
    console.log(authService.currentUser);
  }, 10000);
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
