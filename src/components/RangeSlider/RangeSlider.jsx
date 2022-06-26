import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { priceFilter } from '../../store/dataFiltersSlice'

function valuetext(value) {
   return `${value}`;
}



export default function RangeSlider() {
   const dispatch = useDispatch();
   const [value, setValue] = React.useState([0, 20000]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
      dispatch(priceFilter({ value }))
   };


   return (
      <Box sx={{ width: 260 }}>
         <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={20000}
         />
      </Box>
   );
}
