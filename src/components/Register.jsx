import React from "react";
import axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      headers: {
        "Content-Type": "application/json"
      }
    };
    this.handleChange = event => {
      this.state = { ...this.state, [event.target.name]: event.target.value };
    };
    this.handleSubmit = event => {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const url = "https://pintreachbackend.herokuapp.com/api/auth/register";
      event.preventDefault();
      axios
        .post(proxy + url, this.state)
        .then(res => {
          localStorage.setItem("username", res.data.newUsers.username);
          localStorage.setItem("id", res.data.newUsers.id);
        })
        .catch(err => {
          console.log("error", err);
        });
      document.getElementById("reg").reset();
      this.state = {
        login: "",
        password: "",
        headers: {
          "Content-Type": "application/json"
        }
      };
    };
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img
              src=""
              alt=""
            />
          </div>
          <div className="header">Register</div>
          <div className="form">
            <form id="reg" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="footer">
                <button type="submit" className="btn">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}