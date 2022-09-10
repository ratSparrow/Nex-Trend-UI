import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useFirebase = () => {
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  let navigate = useNavigate();

  //   create user
  const userCreation = (user) => {
    try {
      createUserWithEmailAndPassword(auth, user.email, user.password).then(
        (userCredential) => {
          setSuccess(userCredential.user);
          console.log(userCredential.user);
        }
      );
    } catch (error) {
      const errorMessage = error.code;
      console.log(errorMessage);
      setErr(errorMessage);
    }
  };

  //   sign in user
  const signIn = async (user) => {
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password).then(
        (userCredential) => {
          const user = userCredential.user;
          user && navigate("/shop", { replace: true });
        }
      );
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
      })
      .catch((error) => {});
  };

  return [userCreation, success, err, signIn, googleSignIn];
};

export default useFirebase;
