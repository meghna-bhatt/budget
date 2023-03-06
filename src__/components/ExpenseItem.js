import React from "react";
import {TiDelete} from 'react-icons/ti';

const ExpenseItem = (props) => {
    return(
        <li className="list-group-item d-flex justify-content-between align-itms-center">
            {props.name}
            <div>
                <span className='badge-primary badge-pill mr-3'> ${props.cost}
                </span>
                <button className="button-plus border rounded-circle icon-shape icon-sm lh-0">+</button>
                <button className="button-minus border rounded-circle  icon-shape icon-sm mx-1 lh-0"> - </button>
                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li>
    )
};
export default ExpenseItem;