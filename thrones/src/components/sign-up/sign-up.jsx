import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up.scss'
import axios from 'axios'
import thronetest from "../axiostest/thronetest";

class SignUp extends React.Component {
    constructor() {
        super();
        // const {username, email, location, password, confirmPassword} = this.state;
        this.state = {
            username: '',
            email: '',
            location: '',
            password: '',
            confirmPassword: '',
        }
        };

        handleSubmit = async event => {
          event.preventDefault();
          const {username, email, location , password, confirmPassword} = this.state;
          
          if(password != confirmPassword) {
            alert("passwords do not match");
            return;
          }
          else if(username != '' && email != '' && location != '' && password != ''){
              
            axios.post('https://thrones-be.herokuapp.com/api/profile/' , this.state)
            .then(res => {
              console.log(res.data)
            })
            .catch(err => {
              console.error('uh oh')
            })
          }

        //try {
        //       const { user } = await auth.cre
        //   } catch (error) {
        // }
        

        this.setState({
          username: '', 
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
        const {username, email, location , password, confirmPassword } = this.state;
            return (
              <div id="sign-up">
                <h2 className= "title"> I do not have an account </h2>
                <span> Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                  <FormInput
                    type= "text"
                    name= "username"
                    value={username}
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