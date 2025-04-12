import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [expense, setExpense] = useState({
        title: '',
        description: '',
        category: '',
        amount: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense({ ...expense, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense({ ...expense, id: Date.now() });
        setExpense({ title: '', description: '', category: '', amount: '', date: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Expense</h2>
            <input type="text" name="title" placeholder="Expense Title" value={expense.title} onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" value={expense.description} onChange={handleChange} />
            <input type="text" name="category" placeholder="Category" value={expense.category} onChange={handleChange} />
            <input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} />
            <input type="date" name="date" value={expense.date} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ExpenseForm;