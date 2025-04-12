import React from 'react';

const ExpenseList = ({ expenses }) => {
    return (
        <div>
            <h2>Expense List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.title}</td>
                            <td>{expense.description}</td>
                            <td>{expense.category}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;