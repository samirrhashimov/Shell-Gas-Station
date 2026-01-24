import React, { useState } from 'react'
import '../css/content.css'
import tarif from '../data/tarif.json'

const Content = () => {
    const [fuelType, setFuelType] = useState('');
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    function CalcFuel(type, amount) {
        return tarif[type] * amount;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const type = e.target.fuel.value;
        const amount = parseFloat(e.target.amount.value);
        const total = CalcFuel(type, amount);

        setFuelType(type);
        setAmount(amount);
        setTotal(total);
    }

    return (
        <div>
            <div className='fuelArea'>
                <form className='FuelForm' onSubmit={handleSubmit}>
                    <label>Select fuel:</label>
                    <select className="fuelSelect" name='fuel'>
                        <option value="AI-92">AI-92</option>
                        <option value="AI-95">AI-95</option>
                        <option value="AI-98">AI-98</option>
                        <option value="Diesel">Diesel</option>
                        <option value="LPG">LPG</option>
                        <option value="Methane_CNG">Methane CNG</option>
                        <option value="Electric">Electric</option>
                    </select>
                    <label>Fuel Amount:</label>
                    <input className='fuelAmountSelect' type='number' name='amount' placeholder='(l/kw)'></input>
                    <button className='fuelSubmit' type="submit">Calculate</button>
                </form>
            </div>

            <div className='resultArea'>
                <p className='fuel_type'>Fuel Type: <span>{fuelType}</span></p>
                <p className='total_fuel'>Total Fuel: <span>{amount} l/kw</span></p>
                <p className='total_payment'>Total Payment: <span>{total.toFixed(2)} AZN</span></p>
            </div>
        </div>
    )
}

export default Content
