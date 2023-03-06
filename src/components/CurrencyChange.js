import React, { useState } from 'react';
import Budget from './Budget';
import ViewBudget from './ViewBudget';

const CurrencyChange = () => {
    const [value, setValue] = useState("");

	const handleChange = (e) => {
	    setValue(e.target.value);
	};
	// console.log(value);
	
    return (
        <>
          <select className='alert p-4 alert-success' value={value} onChange={handleChange} id="currency">
            <option value="dollar"> $ Dollar</option>
            <option value="pound"> $ Pound</option>
            <option value="euro"> $ Euro</option>
            <option value="rupee"> $ Rupee</option>
        </select>
      
        </>
      
	);
};

export default CurrencyChange;
