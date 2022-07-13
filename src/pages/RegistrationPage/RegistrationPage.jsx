import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userLoginSlice';
import Form from '../../components/Form';

export default function RegistrationPage() {

   const navigate = useNavigate();



   const dispatch = useDispatch();

   const { reset } = useForm();

   const onSubmit = (data) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, data.Email, data.Password)
         .then((userCredential) => {
            const user = userCredential.user;
            dispatch(setUser({
               email: user.email,
               id: user.uid,
               token: user.accessToken
            }));
            navigate('../client', { replace: true });
            reset();
         })
         .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
         });
   };

   return <Form submit={onSubmit} title='Регистрация' />
};