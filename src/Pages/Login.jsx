import React from 'react'
//import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="ui middle aligned center aligned grid" style={{ height: '100vh', backgroundColor: '#DADADA',overflow:'hidden',padding : 5 }}>
      <div className="column" style={{ maxWidth: 450 }}>
        <h2 className="ui teal image header">
          <div className="content">
            Log-in to your account
        </div>
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            {/* <Link to="/"> */}          
             <div className="ui fluid large teal submit button">Login</div> 
            {/* </Link> */}
          </div>

          <div className="ui error message"></div>

        </form>

        <div className="ui message">
          New to us? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;