import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up.scss'
import axios from 'axios'
import thronetest from "../axiostest/thronetest";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            location: '',
            password: '',
            confirmPassword: '',
        }
        };

        handleSubmit = async event => {
          event.preventDefault();
          const {displayName, email, location , password, confirmPassword} = this.state;
          
          if(password != confirmPassword) {
            alert("passwords do not match");
            return;
          }
          else if(displayName != '' && email != '' && location != '' && password != ''){
            
            const obj = {
              username: this.state.displayName,
              name: this.state.displayName,
              email: this.state.email,
              location: this.state.location,
              password: this.state.password,
            }

            //START
            // console.log(thronetest.create(obj))
            //END
              
            axios.post('https://thrones-be.herokuapp.com/api/profiles/' , obj)
            .then(res => {
              console.log(res.data)
            })
            .catch(err => {
              console.error('uh oh')
            })
          }

        //   try {
        //       const { user } = await auth.cre
        //   } catch (error) {
        // }
        

        this.setState({
          displayName: '', 
          email: '', 
          location: '',
          password: '', 
          confirmPassword: ''
          
        });
      };   
      

      handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;

      this.setState({ [name]: value} );
      };

      
        render() {
        const {displayName, email, location , password, confirmPassword } = this.state;
            return (
              <div id="sign-up">
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
                    type= "text"
                    name= "location"
                    value={location}
                    onChange={this.handleChange}
                    label= "Zipcode"
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

/* 
        user{
          name: asdasda
          address: 112 second st
          thrones made: {
            ksljd2j2lj341!,
            ksljd2j2lj342!,
            ksljd2j2lj591!,
            kslj22j2ld344!,
          }
        }

        throne

        */