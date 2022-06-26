import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userLoginSlice';
import './LoginPage.css';

export default function LoginPage() {

   const dispatch = useDispatch();

   const navigate = useNavigate();


   const {
      register,
      formState: {
         errors,
         isValid,
      },
      reset,
      handleSubmit } = useForm({
         mode: "onBlur"
      });

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

   return (
      <div className="auth-container">
         <h1>Вход</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div>
               {errors?.Login && <p>{errors?.Login?.message || "Ошибка!"}</p>}
            </div>
            <label>
               Электронная почта:
               <input
                  {...register('Email', {
                     required: "Поле обязателньо к заполнению!",
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Неверный адрес электронной почты"
                     },
                     maxLength: {
                        value: 20,
                        message: "Поле не должно содержать более 20 символов!"
                     }
                  })}
               />
            </label>
            <div>
               {errors?.Email && <p>{errors?.Email?.message || "Error!"}</p>}
            </div>
            <label>
               Пароль:
               <input
                  type="password"
                  {...register('Password', {
                     required: "Поле обязателньо к заполнению!",
                     minLength: {
                        value: 8,
                        message: "Поле должно содержать не менее 8 символов!"
                     },
                     maxLength: {
                        value: 20,
                        message: "Поле не должно содержать более 20 символов!"
                     }
                  })}
               />
            </label>
            <div>
               {errors?.Password && <p>{errors?.Password?.message || "Error!"}</p>}
            </div>
            <input type="submit" disabled={!isValid} value="Войти" />
            <p className="singUp">Нет зарегистрированного аккаунта? <Link to="/registration" className="registration-text">Зарегистрироваться</Link></p>
         </form>
      </div>
   );
}