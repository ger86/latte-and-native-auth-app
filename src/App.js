import React from 'react';
import AppStack from './AppStack';
import {UserContextProvider} from '#/contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <AppStack />
    </UserContextProvider>
  );
}

export default App;
