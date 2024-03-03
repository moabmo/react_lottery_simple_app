import React, { useState } from 'react';

function LotteryGenerator() {
    const [lotteryNumbers, setLotteryNumbers] = useState([]);
    const [crownNumber, setCrownNumber] = useState(null);
    const [dateTime, setDateTime] = useState("");

    const generateNumbers = () => {
        let numbers = [];
        let crown = Math.floor(Math.random() * 10) + 1; // Generate crown number between 1 and 10

        for (let i = 0; i < 6; i++) {
            let number = Math.floor(Math.random() * 49) + 1; // Generate lottery number between 1 and 49
            numbers.push(number);
        }

        const currentDate = new Date();
        const formattedDateTime = currentDate.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
        setDateTime(formattedDateTime);

        setLotteryNumbers(numbers);
        setCrownNumber(crown);
    };

    return (
        <div className="lottery-generator" style={{ textAlign: "center", backgroundColor: "black", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}>
            <h1 style={{ marginBottom: "20px", color: "orange" }}>React Lottery Winning Numbers Generator</h1>
            <button onClick={generateNumbers} style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "orange", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", transition: "background-color 0.3s" }}>Generate Numbers</button>
            <div className="numbers" style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "20px", fontWeight: "bold", color: "orange" }}>Lottery Numbers:</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {lotteryNumbers.map((number, index) => (
                        <div key={index} style={{ margin: "5px", padding: "10px", borderRadius: "5px", backgroundColor: "orange", color: "white", fontWeight: "bold", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)" }}>
                            {number}
                        </div>
                    ))}
                </div>
                {crownNumber && <p style={{ fontSize: "20px", fontWeight: "bold", color: "orange", marginTop: "20px" }}>Crown Number: <span style={{ color: "white" }}>{crownNumber}</span></p>}
            </div>
            <p style={{ marginTop: "20px", fontSize: "14px", color: "white" }}>Date and Time: {dateTime}</p>
        </div>
    );
}

export default LotteryGenerator;
