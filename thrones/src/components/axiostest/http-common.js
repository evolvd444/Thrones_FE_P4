import axios from "axios";

export default axios.create({
  baseURL: "https://thrones-be.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});