import { useEffect, useState } from "react";

const TotalCounter = () => {
    const [firstCount, setfirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [sum, setSum] = useState([""]);

    useEffect(() => {
        const calculator = () => {
            console.log(sum[0]);
            if (sum[0] == "+") {
                setCurrentValue(firstCount + secondCount)
            } else if (sum[0] == "-"){
                setCurrentValue(firstCount - secondCount)
            } else if (sum[0] == "/"){
                setCurrentValue(firstCount / secondCount)
            } else if (sum[0] == "*")
            setCurrentValue(firstCount * secondCount)
            
        }
        calculator();
    }, [sum])
return (
    <div>
        <div className="Nav">
            <h1> React Exercises</h1>
            <div className="numberExs">
                <h3>#1</h3>
                <h3>#2</h3>
                <h3>#3</h3>
                <h3>#4</h3>
            </div>

        </div>
        <div className="exercise">Exercise 2</div>
        <div className="textInfo">
            <p> Increment the number when you click on the buttons and display the result of the operation. Yo can inly use 3 states.</p>
        </div>
        <div className="selector">
            <h2></h2>
            <button onClick={() => setfirstCount(firstCount + 1)}>{firstCount}</button>
            <select onChange={selector => setSum(selector.target.value)}>
                <option value={"+"}>+</option>
                <option value={"-"}>-</option>
                <option value={"/"}>/</option>
                <option value={"*"}>*</option>
            </select>
            <button onClick={() => setSecondCount(secondCount + 1)}>{secondCount}</button>
            <p>{currentValue}</p>
        </div>
    </div>

)
}

export default TotalCounter