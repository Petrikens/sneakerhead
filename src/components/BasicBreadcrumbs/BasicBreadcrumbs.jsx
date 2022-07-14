import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';



const BasicBreadcrumbs = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const pathnames = location.pathname.split('/').filter(x => x);
   console.log(pathnames);
   return (
      <div role="presentation" >
         <Breadcrumbs aria-label="breadcrumb">
            <Link onClick={() => navigate('/')}>Главная</Link>
            {pathnames.map((name, index) => {
               const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
               const isLast = index === pathnames.length - 1;
               return (
                  isLast
                     ?
                     <Typography>{name}</Typography>
                     :
                     <Link onClick={() => navigate(routeTo)}>{name}</Link>
               )
            })}
         </Breadcrumbs>
      </div >
   );
}

export default BasicBreadcrumbs;
