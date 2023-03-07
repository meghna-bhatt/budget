// import React, { createContext, useReducer } from 'react';

// // 5. The reducer - this is used to update the state, based on the action
// export const AppReducer = (state, action) => {
//     let new_expenses = [];
//     switch (action.type) {
//         case 'ADD_QUANTITY':
//             let updatedqty = false;
//             state.expenses.map((expense)=>{
//                 if(expense.name === action.payload.name) {
//                     expense.quantity = expense.quantity + action.payload.quantity;
//                     updatedqty = true;
//                 }
//                 new_expenses.push(expense);
//                 return true;
//             })
//             state.expenses = new_expenses;
//             action.type = "DONE";
//             return {
//                 ...state,
//             };

//             case 'RED_QUANTITY':
//                 state.expenses.map((expense)=>{
//                     if(expense.name === action.payload.name) {
//                         expense.quantity = expense.quantity - action.payload.quantity;
//                     }
//                     expense.quantity = expense.quantity < 0 ? 0: expense.quantity;
//                     new_expenses.push(expense);
//                     return true;
//                 })
//                 state.expenses = new_expenses;
//                 action.type = "DONE";
//                 return {
//                     ...state,
//                 };
//         case 'DELETE_ITEM':
//             state.expenses.map((expense)=>{
//                 if(expense.name === action.payload.name) {
//                     expense.quantity = 0;
//                 }
//                 new_expenses.push(expense);
//                 return true;
//             })
//             state.expenses = new_expenses;
//             action.type = "DONE";
//             return {
//                 ...state,
//             };
//     case 'CHG_LOCATION':
//             action.type = "DONE";
//             state.Location = action.payload;
//             return {
//                 ...state
//             }

//         default:
//             return state;
//     }
// };

// // 1. Sets the initial state when the app loads
// const initialState = {
//     budget: 2000,
//     expenses: [
//         { id: "Shirt", name: 'Shirt'},
//         { id: "Jeans", name: 'Jeans'},
//         { id: "Dress", name: 'Dress'},
//         { id: "Dinner set", name: 'Dinner set'},
//         { id: "Bags", name: 'Bags'},

//         // { id: "Shirt", name: 'Shirt', quantity: 0, unitprice: 500 },
//         // { id: "Jeans", name: 'Jeans', quantity: 0, unitprice: 300 },
//         // { id: "Dress", name: 'Dress', quantity: 0, unitprice: 400 },
//         // { id: "Dinner set", name: 'Dinner set', quantity: 0, unitprice: 600 },
//         // { id: "Bags", name: 'Bags', quantity: 0, unitprice: 200 },
//     ],
//     Location: '£'
// };

// // 2. Creates the context this is the thing our components import and use to get the state
// export const AppContext = createContext();

// // 3. Provider component - wraps the components we want to give access to the state
// // Accepts the children, which are the nested(wrapped) components
// export const AppProvider = (props) => {
//     // 4. Sets up the app state. takes a reducer, and an initial state
//     const [state, dispatch] = useReducer(AppReducer, initialState);

//     const totalExpenses = state.expenses.reduce((total, item) => {
//         return (total = total + (item.unitprice*item.quantity));
//     }, 0);
// state.CartValue = totalExpenses;

//     return (
//         <AppContext.Provider
//             value={{
//                 expenses: state.expenses,
//                 CartValue: state.CartValue,
//                 dispatch,
//                 Location: state.Location
//             }}
//         >
//             {props.children}
//         </AppContext.Provider>
//     );
// };




import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};
        case 'CHG_LOCATION':
            action.type = "DONE";
            state.Location = action.payload;
            return {
                ...state
            };
		default:
			return state;
	}
};

const initialState = {
	budget: 2000,
	expenses: [
		{ id: uuidv4(), name: 'Shopping', cost: 50 },
		{ id: uuidv4(), name: 'Holiday', cost: 300 },
		{ id: uuidv4(), name: 'Transportation', cost: 70 },
		{ id: uuidv4(), name: 'Fuel', cost: 40 },
		{ id: uuidv4(), name: 'Child Care', cost: 500 },
	],
    Location: '£'
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				budget: state.budget,
				dispatch,
                Location: state.Location
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
