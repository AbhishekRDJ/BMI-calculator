import { useState } from "react";
import "./Calculator.css";

const BMICalculator = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [status, setStatus] = useState("");

    const calculateBMI = () => {
        const bmi = weight / Math.pow(height, 2);
        setBmi(bmi);
        if (bmi < 18.5) {
            setStatus("Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setStatus("Normal weight");
        } else if (bmi >= 25 && bmi <= 29.9) {
            setStatus("Overweight");
        } else {
            setStatus("Obesity");
        }
    };
    
    return (
        <div>
            <h1>BMI Calculator</h1>
            <input
                type="number"
                placeholder="Enter your weight in kg"
                onChange={(e) => setWeight(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter your height in meters"
                onChange={(e) => setHeight(e.target.value)}
            />
            <button onClick={calculateBMI}>Calculate</button>
            <h2>Your BMI is: {bmi}</h2>
            <h2>Your status is: {status}</h2>
        </div>
    );
}
export default BMICalculator;