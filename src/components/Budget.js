import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, dispatch, expenses } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
	console.log("check:", budget);
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
		
	};
	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
	console.log(budget);
	
	const alertType = budget > 20000  ? (alert('Alert Exceeded!!!!')) : '';
	const alertType1 = budget < totalExpenses ? (alert('Fail!!!!')) : '';

	return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;
