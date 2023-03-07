import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget, Location } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	// const alertType = totalExpenses > budget ? (alert('Alert Exceeded!!!!')) : 'alert-success';

	// const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert p-4 alert-success`}>
			{/* <div class={`alert p-4 ${alertType}`}> */}
			<span>Remaining: {Location}{budget - totalExpenses}</span>
		</div>
	);
};

export default RemainingBudget;
