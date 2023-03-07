// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// ;

// const ExpenseItem = (props) => {
//     const { dispatch, Location} = useContext(AppContext);

//     const handleDeleteItem = () => {
//         const item = {
//             name: props.name,
//         };

//         dispatch({
//             type: 'DELETE_ITEM',
//             payload: item,
//         });
//     };


//     return (
//         <tr>
//         <td>{props.name}</td>
//         <td>{props.quantity}</td>
//         {/* <td>{Location}{parseInt(props.unitprice)}</td>
//         <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td> */}
//         <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
//         </tr>
//     );
// };

// export default ExpenseItem;


import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa'

const ExpenseItem = (props) => {
	const { dispatch, Location } = useContext(AppContext);
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
			{Location}
            <span onChange={handleChange}>{num}</span>
            
            {/* <input type="text" class="form-control input-cost" value={num} onChange={handleChange}/> */}
		</td>
		<td>
		<span class="input-group-btn">
              <button type="button" class="btn btn-success btn-number rounded-circle" data-type="plus" onClick={incNum}>
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
          </span>
			{/* <button type='button' className="increment btn btn-primary btn-success bg-success rounded-circle" onClick={incNum}>+</button> */}
		</td>
		<td>
		<span class="input-group-btn">
              <button type="button" class="btn btn-danger btn-number rounded-circle"  data-type="minus" onClick={decNum}>
                <span class="glyphicon glyphicon-minus"></span>
              </button>
          </span>
			{/* <button type='button' className="decrement btn btn-secondary btn-danger bg-danger rounded-circle" onClick={decNum}>-</button> */}
		</td>
		<td>
		<TiDelete size='3em' onClick={handleDeleteExpense} />
		</td>
		</tr>
		
	);
};

export default ExpenseItem;
