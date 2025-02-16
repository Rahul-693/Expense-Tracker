import './ExpenseItems.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'
import React, { useState } from 'react';
const ExpenseItems = (props) => {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated!');
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2> {title} </h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>);
}

export default ExpenseItems;