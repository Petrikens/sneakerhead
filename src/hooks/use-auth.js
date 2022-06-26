import { useSelector } from 'react-redux';

export default function useAuth() {
   const { login, email, token, id } = useSelector(state => state.userLogin);

   return {
      isAuth: !!id,
      login,
      email,
      token,
      id,
   }
}