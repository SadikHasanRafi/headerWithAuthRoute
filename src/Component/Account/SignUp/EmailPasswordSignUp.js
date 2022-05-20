import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import auth from "../firebase.init";

const EmailPasswordSignUp = () => {
  const emailPasswordSignUp = (name, email, password) => {
    // console.log(name,email,password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };

  return { emailPasswordSignUp };
};

export default EmailPasswordSignUp;
