// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import { AppProvider } from './context/AppContext';
// // import CartValue from './components/CartValue';
// import ExpenseList from './components/ExpenseList';
// import ItemSelected from './components/ItemSelected';
// import Location from './components/Location';
// import Budget from './components/Budget';

// const App = () => {
//     return (
//         <AppProvider>
//             <div className='container'>
//                 <h1 className='mt-3'>Shopping App</h1>
//                 <div className='row mt-3'> 
//                     <div className='col-sm'>
//                         {/* <CartValue /> */}
//                         <Budget />
//                     </div>
//                     <div className='col-sm'>
//                         <Location />
//                     </div>
//                 </div>
//                 <h3 className='mt-3'>Shopping Cart</h3>
//                 <div className='row '>
//                     <div className='col-sm'>
//                         <ExpenseList />
//                     </div>
//                 </div>
//                 <h3 className='mt-3'>Add Items</h3>
//                 <div className='row mt-3'>
//                     <div className='col-sm'>
//                         <ItemSelected/>
//                     </div>
//                 </div>
//             </div>
//         </AppProvider>
//     );
// };
// export default App;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
// import AddExpenseForm from './components/AddExpenseForm';

import RemainingBudget from './components/Remaining';
import Location from './components/Location';
import ItemSelected from './components/ItemSelected';

const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>Company's Budget Allocation</h1>
				<div className='row mt-4'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
					<div className='col-sm'>
						<Location />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ItemSelected />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
