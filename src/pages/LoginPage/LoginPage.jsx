import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userLoginSlice';
import Form from '../../components/Form';

export default function Loginpage() {

   const navigate = useNavigate();
   const location = useLocation();
   const fromPage = location.state?.from?.pathname || '/'

   const dispatch = useDispatch();

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
            navigate(fromPage, { replace: true });
            reset();
         })
         .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
         });
   };

   return <Form submit={onSubmit} title='Войти' />
};