import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Mainpage from './Pages/Mainpage';
import Login from './Pages/Login';

const App= () =>{
  return (
    <div >
      <Header as='h1' color='blue' textAlign='center' content='Hopescope' style={{padding : 8}} />
      {/* <Mainpage/> */}
      <Login/>
    </div>
  );

};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
