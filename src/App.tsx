import React from 'react';
import {ContactContextProvider} from '~/Context/Contact';
import Navigator from '~/Screens/Navigator';

const App = () => {
  return (
    <ContactContextProvider>
      <Navigator />
    </ContactContextProvider>
  );
};

export default App;
