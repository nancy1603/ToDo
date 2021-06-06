import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';



export class App1 extends Component {
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profile0bj);
    

        
    }
    render() {
        return (
            <div>
              <GoogleLogin
              clientId="282260611299-j9ralg5rmi5rv3pbm8obgdv7r7ik1co3.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
              />
            
            </div>
        )
    }

   
}

export default App1;