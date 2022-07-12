import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userLoginSlice';
import Form from '../../components/Form';

export default function Loginpage() {

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const { reset } = useForm();

   const onSubmit = (data) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, data.Email, data.Password)
         .then((userCredential) => {
            const user = userCredential.user;
            dispatch(setUser({
               email: user.email,
               id: user.uid,
               token: user.accessToken
            }));
            navigate("../client", { replace: true });
            reset();
         })
         .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
         });
   };

   return <Form submit={onSubmit} title='Войти' />
}


{/* <p className="singIn">Нет зарегистрированного аккаунта? <Link to="/registration" className="login-text">Зарегистрироваться</Link></p> */ }