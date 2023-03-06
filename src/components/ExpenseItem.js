import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);
	let [num, setNum]= useState(props.cost);
	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};
	let incNum =()=>{
		if(num<20000)
		{
		setNum(Number(num)+10);
		}
	  };
	  let decNum = () => {
		 if(num>0)
		 {
		  setNum(num - 10);
		 }
	  }
	 let handleChange = (e)=>{
	   setNum(e.target.value);
	  }
	

	return (
		<tr>
		<td>
			{props.name}
		</td>
		<td>
		{/* <span class='badge-primary badge-pill mr-3'>£{props.cost}</span> */}
			<input type="text" class="form-control input-cost" value={num} onChange={handleChange}/>
		</td>
		<td>
			<button type='button' className="increment btn btn-primary btn-success bg-success rounded-circle" onClick={incNum}>+</button>
		</td>
		<td>
			<button type='button' className="decrement btn btn-secondary btn-danger bg-danger rounded-circle" onClick={decNum}>-</button>
		</td>
		<td>
		<TiDelete size='3em' onClick={handleDeleteExpense} />
		</td>
		</tr>
		
	);
};

export default ExpenseItem;
