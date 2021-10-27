import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import Search from './Search';


const App = () => {


  return (
    <Provider store={store}>
        <Search/>
    </Provider>
  );
}

export default App;
