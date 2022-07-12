import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CONSTANTS from '../constants.js';
import { useDispatch } from 'react-redux';
import { brandFilter } from '../../store/dataFiltersSlice'

export default function RadioButtonsGroup() {

   const dispatch = useDispatch();

   function brandClick({ target }) {
      const { value } = target;
      console.log(value);
      if (target.checked) {
         dispatch(brandFilter({ value }))
      }
   }

   return (
      <FormControl>
         <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
         >
            {Object.entries(CONSTANTS.BRANDS).map(el => {
               const elementData = el[1];
               return (
                  <FormControlLabel
                     key={elementData.value}
                     value={elementData.value}
                     control={<Radio />}
                     label={elementData.text}
                     onClick={brandClick}
                  />
               )
            })}
         </RadioGroup>
      </FormControl >
   );
}


