import React from "react";
import { useState } from "react";

const UserForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  return (
    <div className="card">
      <h5 className="card-header">Create User</h5>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="form-control"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="cpass" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              name="cpass"
              id="cpass"
              className="form-control"
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
            ></input>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Create User
            </button>
          </div>
        </form>
        <div className="container">
          <div className="mt-3">
              <p>Your Form Data</p>
            </div>
            <div className="mt-3">
              <p>First Name: {firstName}</p>
            </div>
            <div className="mt-3">
              <p>Last Name: {lastName}</p>
            </div>
            <div className="mt-3">
              <p>E-mail: {email}</p>
            </div>
            <div className="mt-3">
              <p>Password: {pass}</p>
            </div>
            <div className="mt-3">
              <p>Confirm Password: {cpass}</p>
            </div>
                </div>
        </div>
    </div>
  );
};

export default UserForm;
