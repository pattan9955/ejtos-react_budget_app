import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const handleBudgetChange = (newBudget) => {        
        const totalExpenses = expenses.reduce((total, item) => {
            return total + item.cost;
        }, 0);
        
        if (newBudget > 20000) {
            alert("The total budget cannot exceed $20000.");
            return;
        }
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        
        dispatch({
            type: "SET_BUDGET",
            payload: newBudget
        });
    }

    return (
        <div className="alert alert-secondary">
            Budget: {currency}<input type='number' defaultValue={budget} step='10' onChange={evt => handleBudgetChange(evt.target.value)} />
        </div>
    );
};

export default Budget;
