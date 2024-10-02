import React,{useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expense/Expenses';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.64,
    date: new Date(2024, 9, 10)
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 100.64,
    date: new Date(2024, 8, 19)
  },
  {
    id: 'e3',
    title: 'Juice',
    amount: 10.00,
    date: new Date(2024, 2, 1)
  },
  {
    id: 'e4',
    title: 'Chair',
    amount: 50.79,
    date: new Date(2023, 5, 29)
  }
];
const App=()=> {
  const [expenses,setExpense]=useState(dummyExpenses);
  const addExpenseHandler=(expense)=>{
    setExpense((prevExpense)=>{
      return [expense,...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} /> 
    </div>
  );
}

export default App;