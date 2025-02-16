import ExpenseChart from './ExpenseChart'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseList from './ExpenseList'
import ExpenseFilter from './ExpenseFilter'
import React, { useState } from 'react'
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
    
    return (
        <div>
            <Card className='Expenses'>
                <ExpenseFilter selected={filteredYear} onChangeHandler={filterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpenseList items={filteredExpenses}/>
            </Card>
        </div>
    )
}
export default Expenses;


{/* <ExpenseItems title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItems>
                <ExpenseItems title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItems>
                <ExpenseItems title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItems>
                <ExpenseItems title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItems> */}