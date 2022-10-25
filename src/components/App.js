import React, {useState} from 'react';
import AppRouter from './Router';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
