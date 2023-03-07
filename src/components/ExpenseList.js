// import React, { useContext } from 'react';
// import ExpenseItem from './ExpenseItem';
// import { AppContext } from '../context/AppContext';

// const ExpenseList = () => {
//     const { expenses } = useContext(AppContext);

//     return (
//         <table className='table'>
//               <thead className="thead-light">
//             <tr>
//               <th scope="col">Items</th>
//               {/* <th scope="col">Quantity</th>
//               <th scope="col">Unit Price</th> */}
//               <th scope="col">Items Price</th>
//               <th scope="col">Remove</th>
//             </tr>
//           </thead>
//             <tbody>
//             {expenses.map((expense) => (
//                 <ExpenseItem id={expense.id} key={expense.id} name={expense.name} />
//                 // <ExpenseItem id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} unitprice={expense.unitprice} />
//             ))}
//             </tbody>
//         </table>
//     );
// };

// export default ExpenseList;



import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<table class="table">
				<tr>
					<th scope="row">Department</th>
					<th scope="row">cost</th>
					<th scope="row">increment by 10</th>
					<th scope="row">decrement by 10</th>
				</tr>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</table>
		</>
	);
};

export default ExpenseList;
