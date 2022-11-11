import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import "../Signup/Signup.css";
function Signup() {
  return (
    <div class="signup">
      <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
        <h1>
          Inscription <i class="fa-solid fa-user"></i>
        </h1>
        <form class="form-group">
          <CustomInput label="Name"/>
          <CustomInput label="Email"/>
          <CustomInput label="Password"/>

          <p>
            Already have an account? <a href="/">Sign in here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
