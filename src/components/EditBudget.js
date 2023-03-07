import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	const maxLengthCheck = (object) => {
		if (object.target.value.length > object.target.maxLength) {
		 object.target.value = object.target.value.slice(0, object.target.maxLength)
		  }
	};
	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				// min= '1'
				max= '20000'
				maxLength={5}
				value={value}
				onChange={(event) => {setValue(event.target.value)}}
				onInput={maxLengthCheck}
				step={10}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;
