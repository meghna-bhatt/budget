import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    console.log(expenses);
    return(
        <ul className="list-group">
            {expenses.map((expense)=>(
            <ExpenseItem 
            id={expense.id}
            department={expense.department}
            cost={expense.cost} />
        ))}</ul>
    )
};

export default ExpenseList;