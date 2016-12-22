import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';


class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
      this.setState({
        [e.target.name]: e.target.value
      });
  }

  onSubmit(e){
      e.preventDefault();
      console.log(this.state);
  }

  render() {
    const options = map(timezones, (val, key) =>
            <option key={val} value={val}>{key}</option>
        );

    return(
      <div>
          <form onSubmit={this.onSubmit}>
              <h1> Join our community! </h1>
              <div className="form-group">
                <label className="control-label">Username</label>
                <input type="text" className="form-control" id="usernameInput" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label className="control-label">Email</label>
                <input type="email" className="form-control" id="usernameInput" name="email" placeholder="email" value={this.state.email} onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label className="control-label">Password</label>
                <input type="password" className="form-control" id="usernameInput" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label className="control-label">Confirm Password</label>
                <input type="password" className="form-control" id="usernameInput" name="passwordConfirmation" placeholder="Confirm Password" value={this.state.passwordConfirmation} onChange={this.onChange}/>
              </div>

              <div className="form-group">
                <label className="control-label">TimeZone</label>
                <select
                  className="form-control"
                  name="timezone"
                  onChange={this.onChange}
                  value={this.state.timezone}
                >
                  <option value="" disabled>Choose Your Timezone</option>
                  {options}
                </select>
              </div>


              <button type="submit" className="btn btn-primary btn-lg">Sign up</button>
          </form>
      </div>
    );

  }
}


export default SignupForm;
