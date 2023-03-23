import React, { useState } from "react";
import axios from "axios";

export default function User() {
  const [firstname, setFname] = useState();
  const [lastname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobileNumber] = useState();

  function sendData(e) {
    e.preventDefault();
    const user = {
      firstname,
      lastname,
      email,
      password,
      mobile,
    };
    // console.log(user);

    axios({
      method: "POST",
      url: "http://localhost:4000/api/user/register/",

      headers: {
        "Content-Type": "application/json",
      },
      data: [
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          mobile: mobile,
        },
      ],
    })
      .then((res) => {
        const persons = res.data;
        console.log(persons);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <form class="row g-3" onSubmit={sendData}>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Mobile Number
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
