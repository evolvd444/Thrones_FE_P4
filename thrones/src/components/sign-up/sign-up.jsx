import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up.scss'
class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
        };

        handleSubmit = async event => {
          event.preventDefault();

        //   const {displayName, email, password, confirmPassword} =this.state;

        //   if(password != confirmPassword) {
        //     alert("passwords do not match");
        //     return;
        //   }

        //   try {
        //       const { user } = await auth.cre
        //   } catch (error) {
        // }

        render() {
        const {displayName, email, password, confirmPassword } = this.state;
            return (
              <div classname="sign-up">
                <h2 className= "title"> I do not have an account </h2>
                <span> Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                  <FormInput
                    type= "text"
                    name= "displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label= "Display Name"
                    required
                  />
                  <FormInput
                    type= "email"
                    name= "email"
                    value={email}
                    onChange={this.handleChange}
                    label= "Email"
                    required
                  />
                  <FormInput
                  type= "password"
                  name= "password"
                  value={password}
                  onChange={this.handleChange}
                  label= "Password"
                  required
                />
                <FormInput
                type= "password"
                name= "confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label= "Confirm Password"
                required
              />
              <button type="submit">SIGNUP</button>
            </form>
              </div>
            
            )
          }
        }

export default SignUp