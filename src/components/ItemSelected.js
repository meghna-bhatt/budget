// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';

// const ItemSelected = (props) => {
//     const { dispatch, Location} = useContext(AppContext);

//     const [name, setName] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [action, setAction] = useState('');
    

//     const submitEvent = () => {

//         const item = {
//             name: name,
//             quantity: parseInt(quantity),
//         };

//         if(action === "Reduce") {
//             dispatch({
//                 type: 'RED_QUANTITY',
//                 payload: item,
//             });
//         } else {
//                 dispatch({
//                     type: 'ADD_QUANTITY',
//                     payload: item,
//                 });
//             }
//     };

//     return (
//         <>
//         <form onClick={submitEvent}>
// <div>
//             <div className='row'>

//             <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
//                     <div className="input-group-prepend">
//                 <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
//                 </div>
//                   <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
//                         <option defaultValue>Choose...</option>
//                         <option value="Shirt" name="Shirt"> Shirt</option>
//                 <option value="Dress" name="Dress">Dress</option>
//                 <option value="Jeans" name="Jeans">Jeans</option>
//                 <option value="Dinner set" name="Dinner set">Dinner set</option>
//                 <option value="Bags" name="Bags">Bags</option>
//                   </select>

//                     <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
//                 <label className="input-group-text" htmlFor="inputGroupSelect02">Quantity</label>
//                 </div>
//                   <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
//                   <option defaultValue value="Add" name="Add">Add</option>
//                 <option value="Reduce" name="Reduce">Reduce</option>
//                   </select>  
//                   <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>
//                <label>{Location}</label>
//                     <input
//                         required='required'
//                         type='number'
//                         id='cost'
//                         value={quantity}
//                         style={{size: 10}}
//                         onChange={(event) => setQuantity(event.target.value)}>
//                         </input>

//                     <button className="btn btn-primary"  style={{ marginLeft: '2rem' }}>
//                         Save
//                     </button>
//                 </div>
//                 </div>

//         </div>
//         </form>
//         </>
//     );
// };

// export default ItemSelected;


// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';
// import { v4 as uuidv4 } from 'uuid';

// const AddExpenseForm = (props) => {
// 	const { dispatch } = useContext(AppContext);

// 	const [name, setName] = useState('');
// 	const [cost, setCost] = useState('');

// 	const onSubmit = (event) => {
// 		event.preventDefault();
// 		const expense = {
// 			id: uuidv4(),
// 			name,
// 			cost: parseInt(cost),
// 		};

// 		dispatch({
// 			type: 'ADD_EXPENSE',
// 			payload: expense,
// 		});

// 		setName('');
// 		setCost('');
// 	};

// 	return (
// 		<form onSubmit={onSubmit}>
// 			<div class='row'>
// 				<div class='col-sm col-lg-4'>
// 					<label for='name'>Department</label>
// 					{/* <input
// 						required='required'
// 						type='text'
// 						class='form-control'
// 						id='name'
// 						value={name}
// 						onChange={(event) => setName(event.target.value)}
// 					/> */}
// 					<select required='required'
// 						class='form-control'
// 						id='name'
// 						value={name}
// 						onChange={(event) => setName(event.target.value)}>
// 							<option value="it">it</option>
// 							<option value="admin">admin</option>
// 							<option value="hr">hr</option>
// 					</select>
// 				</div>
// 				<div class='col-sm col-lg-4'>
// 					<label for='allocation'>allocation</label>
// 					<select required='required'
// 						class='form-control'
// 						id='allocation'>
// 							<option value="add">add</option>
// 							<option value="subtract">subtract</option>
// 					</select>
// 				</div>
// 				<div class='col-sm col-lg-4'>
// 					<label for='cost'>Cost</label>
					
// 					<input
// 						required='required'
// 						type='number'
// 						class='form-control'
// 						id='cost'
// 						value={cost}
// 						onChange={(event) => setCost(event.target.value)}
// 					/>
// 				</div>
// 			</div>
// 			<div class='row mt-3'>
// 				<div class='col-sm'>
// 					<button type='submit' class='btn btn-primary'>
// 						Save
// 					</button>
// 				</div>
// 			</div>
// 		</form>
// 	);
// };

// export default AddExpenseForm;


import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const ItemSelected = (props) => {
	const { dispatch , Location} = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Department</label>
					{/* <input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/> */}
					<select required='required'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}>
							<option value="it">it</option>
							<option value="admin">admin</option>
							<option value="hr">hr</option>
					</select>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='allocation'>allocation</label>
					<select required='required'
						class='form-control'
						id='allocation'>
							<option value="add">add</option>
							<option value="subtract">subtract</option>
					</select>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>{Location}</label>
					
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary' >
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default ItemSelected;

