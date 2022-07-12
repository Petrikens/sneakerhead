import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CONSTANTS from '../constants.js';
import { useSelector, useDispatch } from 'react-redux';
import { sortChange } from '../../store/dataFiltersSlice';


export default function BasicSelect() {

   const dispatch = useDispatch();

   const sort = useSelector(state => state.dataFilters.sort);

   const sortData = ({ target }) => dispatch(sortChange({ target }));

   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={sort}
               label="Sort"
               onChange={sortData}
            >
               {Object.entries(CONSTANTS.SORT).map(el => {
                  const elementData = el[1];
                  return (
                     <MenuItem
                        key={elementData.value}
                        value={elementData.value}>
                        {elementData.text}
                     </MenuItem>)
               })}
            </Select>
         </FormControl>
      </Box>
   );
}