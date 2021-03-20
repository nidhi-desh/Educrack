import { Router } from "react-router";
import { BrowserRouter, Redirect } from 'react-router-dom';
import "./App.css";
import Routes from './Routes/Routes';

import './Assets/Stylesheets/Main.scss';




function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes />
      </main>
    </BrowserRouter>
  );
}

export default App;
