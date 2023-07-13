import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
    const {currency, dispatch} = useContext(AppContext);

    const mapSymToStr = (sym) => {
        switch (sym) {
            case "$":
                return "$ Dollar";
            case "£":
                return "£ Pound";
            case "€":
                return "€ Euro";
            case "₹":
                return "₹ Ruppee";
            default:
                return ""
        };
    }

    const handleCurrChange = (newCurr) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: newCurr
        });
    }

    return (
        <div className="form-floating">
            <select 
                id="currSelector" 
                className="form-select" 
                style={{backgroundColor: "#93E499"}}
                onChange={evt => handleCurrChange(evt.target.value)}
                value={currency}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
            <label htmlFor="currSelector">Currency ({mapSymToStr(currency)})</label>
        </div>
    )
}

export default CurrencySelect;