import { useState } from 'react';
import CalculatorButton from './CalculatorButton';

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [previous, setPrevious] = useState('');
    const [operator, setOperator] = useState('');
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputNumber = (num) => {
        if (waitingForOperand) {
            setDisplay(num);
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? num : display + num);
        }
    };

    const inputOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (previous === '') {
        setPrevious(inputValue);
    } else if (operator) {
        const currentValue = previous || 0;
        const result = calculate(currentValue, inputValue, operator);
        
        setDisplay(String(result));
        setPrevious(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
    };

    const calculate = (firstValue, secondValue, operator) => {
    switch (operator) {
        case '+': return firstValue + secondValue;
        case '-': return firstValue - secondValue;
        case '×': return firstValue * secondValue;
        case '÷': return firstValue / secondValue;
        default: return secondValue;
    }
};

    const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previous !== '' && operator) {
        const result = calculate(previous, inputValue, operator);
        setDisplay(String(result));
        setPrevious('');
        setOperator('');
        setWaitingForOperand(true);
    }
};

    const clear = () => {
    setDisplay('0');
    setPrevious('');
    setOperator('');
    setWaitingForOperand(false);
};

    const inputDecimal = () => {
    if (waitingForOperand) {
        setDisplay('0.');
        setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
        setDisplay(display + '.');
    }
};

    return (
    <div className="flex justify-center items-center min-h-[calc(100vh-140px)] p-4">
    <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-3xl shadow-2xl w-96 border border-stone-600/30">
        {/* Display Button */}
        <div className="bg-gradient-to-br from-green-300 to-green-200 p-6 rounded-2xl mb-6 min-h-[90px] flex items-center justify-end border border-green-400/50">
        <div className="text-black text-3xl font-bold font-mono">
            {display}
        </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Row 1 */}
            <CalculatorButton onClick={() => inputNumber('7')}>7</CalculatorButton>
            <CalculatorButton onClick={() => inputNumber('8')}>8</CalculatorButton>
            <CalculatorButton onClick={() => inputNumber('9')}>9</CalculatorButton>
            <CalculatorButton variant="operation" onClick={() => inputOperator('-')}>−</CalculatorButton>

          {/* Row 2 */}
            <CalculatorButton onClick={() => inputNumber('4')}>4</CalculatorButton>
            <CalculatorButton onClick={() => inputNumber('5')}>5</CalculatorButton>
            <CalculatorButton onClick={() => inputNumber('6')}>6</CalculatorButton>
            <CalculatorButton variant="operation" onClick={() => inputOperator('+')}>+</CalculatorButton>

          {/* Row 3 */}
            <CalculatorButton onClick={() => inputNumber('1')}>1</CalculatorButton>
            <CalculatorButton onClick={() => inputNumber('2')}>2</CalculatorButton>
            <CalculatorButton onClick={() => inputNumber('3')}>3</CalculatorButton>
            <CalculatorButton variant="operation" onClick={() => inputOperator('÷')}>÷</CalculatorButton>

          {/* Row 4 */}
            <CalculatorButton onClick={() => inputNumber('0')}>0</CalculatorButton>
            <CalculatorButton onClick={inputDecimal}>.</CalculatorButton>
            <CalculatorButton variant="equals" onClick={performCalculation}>=</CalculatorButton>
            <CalculatorButton variant="operation" onClick={() => inputOperator('×')}>×</CalculatorButton>
        </div>
          {/* Clear Button */}
        <CalculatorButton 
            variant="clear" 
            onClick={clear} 
            className="w-full mt-6 text-xl active:scale-[0.98]"
        >
            Clear
        </CalculatorButton>
        </div>
    </div>
);
}

export default Calculator;
