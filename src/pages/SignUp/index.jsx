import React from "react";

import "./styles.css";

function SignUp() {
  return (
    <div className="sign-up">
      <div class="user">
        <header class="user__header">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
            alt=""
          />
          <h1 class="user__title">Cadastro</h1>
        </header>

        <form class="form">
          <div class="form__group">
            <input type="text" placeholder="Username" class="form__input" />
          </div>

          <div class="form__group">
            <input type="email" placeholder="Email" class="form__input" />
          </div>

          <div class="form__group">
            <input type="password" placeholder="Password" class="form__input" />
          </div>

          <button class="btn-form" type="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
