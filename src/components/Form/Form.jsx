import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Form.css';

export default function Form({ submit, title }) {


   const {
      register,
      formState: {
         errors,
         isValid,
      },
      handleSubmit } = useForm({
         mode: "onBlur"
      });


   return (
      <div className="auth-container">
         <h1>{title}</h1>
         <form onSubmit={handleSubmit(submit)}>
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
            <input type="submit" disabled={!isValid} value={title} />
            {
               (title === 'Регистрация')
                  ?
                  <p className="singIn">У вас уже есть аккаунт? <Link to="/login" className="login-text">Войти</Link></p>
                  :
                  <p className="singIn">Нет зарегистрированного аккаунта? <Link to="/registration" className="login-text">Зарегистрироваться</Link></p>
            }
         </form>
      </div>
   );
}