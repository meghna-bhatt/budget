import React from 'react';
import ExpenseTotal from './ExpenseTotal';
import CurrencyChange from './CurrencyChange';

const ViewBudget = (props) => {
	let getcurrency = document.getElementById("currency");
	console.log("==>",getcurrency);
	return (
		<>
			<span>Budget: £{props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;
