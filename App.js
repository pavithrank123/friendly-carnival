import React from 'react'
import { Provider } from "react-redux";
import configureStore from './App/Redux/Store';
import RootRouter from './App/Routes/RootRouter';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persiststore} = configureStore();

const App = () => (

   <Provider store={store}>
     <PersistGate persistor={persiststore}>
        <RootRouter />
     </PersistGate>
   </Provider>
   )

export default App;