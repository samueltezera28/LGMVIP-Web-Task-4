import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleResult = (e) => {
        setResult(result.concat(e.target.value));
    };

    const clearResult = () => {
        setResult('');
    };

    const calculateResult = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const renderButton = (value) => (
        <input
            type="button"
            value={value}
            className="btn"
            onClick={handleResult}
        />
    );

    return (
        <div className="calc">
            <input
                type="text"
                placeholder="0"
                id="answer"
                value={result}
                readOnly
            />
            {renderButton('9')}
            {renderButton('8')}
            {renderButton('7')}
            {renderButton('6')}
            {renderButton('5')}
            {renderButton('4')}
            {renderButton('3')}
            {renderButton('2')}
            {renderButton('1')}
            {renderButton('0')}
            {renderButton('+')}
            {renderButton('-')}
            {renderButton('/')}
            {renderButton('*')}
            <input
                type="button"
                value="Clear"
                className="btn"
                onClick={clearResult}
            />
            <input
                type="button"
                value="="
                className="btn"
                onClick={calculateResult}
            />
        </div>
    );
};

export default Calculator;
