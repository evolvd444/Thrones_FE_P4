import React from 'react';
import FormInput from "../form-input/form-input.component"
import './add-throne.scss'
import axios from 'axios'


class UpdateThrone extends React.Component {
  constructor() {
    super();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.state = {
        owner: '',
        address: '',
        image: '',
        reviews: '',
        user: currentUser.id, 
    }
    };
    
    
    // var axios = require("axios");
    // var axiosDefaults = require("axios/lib/defaults");
    
    // axiosDefaults.xsrfCookieName = "csrftoken"
    // axiosDefaults.xsrfHeaderName = "X-CSRFToken"


    handleSubmit = async event => {
      event.preventDefault();

      const {owner, address, image, reviews} = this.state;
      const url = 'https://thrones-be.herokuapp.com/api/thrones/7ca06c8a-8efb-49b2-836e-e18aa6f3498b/'

      axios.put(url, this.state)
    //   axios.post('http://localhost:8000/thrones/create-throne', this.state)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.error('uh oh')
    })

    

    this.setState({
      owner: '', 
      address: '', 
      image: '', 
      reviews: ''
    });
  };   
  

  handleChange = event => {
    const {name, value} = event.target;

  this.setState({ [name]: value} );
  };

  
    render() {
    const {owner, address, image, reviews } = this.state;
        return (
          <div id="add-throne">
            <h2 className= "title"> I have a contribution to make! </h2>
            <span> Upload your Throne and Review!</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type= "text"
                name= "owner"
                value={owner}
                onChange={this.handleChange}
                label= "owner"
                required
              />
              <FormInput
                type= "address"
                name= "address"
                value={address}
                onChange={this.handleChange}
                label= "address"
                required
              />
              <FormInput
              type= "url"
              name= "image"
              value={image}
              onChange={this.handleChange}
              label= "image"
              required
            />
            <FormInput
            type= "text"
            name= "reviews"
            value={reviews}
            onChange={this.handleChange}
            label= "review"
            required
          />
          <button type="submit">Add Throne</button>
        </form>
          </div>
        
        )
      }
    }


export default UpdateThrone;