import { useState } from "react";

import "./style.css";

import { checkPassword, validateEmail } from "../../utils/helpers";

export const Form = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const isValidEmail = values.email && validateEmail(values.email);
    const isValidUsername = values.username;
    const isValidPassword = values.password && checkPassword(values.password);

    setErrors({
      username: isValidUsername ? "" : "* Username is required",
      email: isValidEmail ? "" : "* Email address is required",
      password: isValidPassword ? "" : "* Password is required",
    });

    setValues({});
  };

  return (
    <div>
      <p>Hello {values.username}</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email address"
            name="email"
            value={values.email || ""}
            onChange={handleInputChange}
          />
          {errors.email && (
            <div id="emailError" className="form-text text-danger">
              {errors.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            name="username"
            value={values.username || ""}
            onChange={handleInputChange}
          />
          {errors.username && (
            <div id="usernameError" className="form-text text-danger">
              {errors.username}
            </div>
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            value={values.password || ""}
            onChange={handleInputChange}
          />
          {errors.password && (
            <div id="passwordError" className="form-text text-danger">
              {errors.password}
            </div>
          )}
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
