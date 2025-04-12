import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './index.css';

const App = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div className="app">
            <h1>Expense Tracker</h1>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
};

export default App;