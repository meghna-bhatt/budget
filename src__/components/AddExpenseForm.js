import React, { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
    const [department, setDepartment] =useState("");
    const [allocation, setAllocation] =useState("");
    const [cost, setCost] =useState("");

    const onSubmit = (event) =>{
        event.preventDefault();
        // alert("department" + department + "allocation" + allocation + "cost" + cost);
        const expense ={
            id: uuidv4(),
            department: department,
            allocation: allocation,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
        
    };
   

    return(
        <>
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for='name'>Department</label>
                    <select id="department" value={department} onChange={(event)=>setDepartment(event.target.value)}>
                        <option value="IT">IT</option>
                        <option value="Admin">Admin</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>
                <div className="col-sm">
                    <label for='allocation'>Allocation</label>
                    <select id="allocation" value={allocation} onChange={(event)=>setAllocation(event.target.value)}>
                        <option value="add">add</option>
                        <option value="subtract">subtract</option>
                    </select>
                </div>
                <div className="col-sm">
                    <label for='cost'>Cost</label>
                    <input required="required" type="number" className="form-control" id="cost" value={cost} onChange={(event)=>setCost(event.target.value)}></input>
                </div>
                <div className="col-sm">
                   <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
        </>
    );
};

export default AddExpenseForm;