import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sum, subtract } from '../../redux/Calculator/Calculator.action';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const result = useSelector((state) => state.calculator);
  const dispatch = useDispatch();



  const sumNumber = useCallback(() => {
    dispatch(sum(num1, num2));
  }, [dispatch, num1, num2]);

  const subtractNumber = useCallback(() => {
    dispatch(subtract(num1, num2));
  }, [dispatch, num1, num2]) ;

  function handleSum() {
    sumNumber();
  }

  function handleSubtract() {
    subtractNumber();
  }

  return (
    <div>
      <input
        type="text"
        placeholder="valor 1"
        onChange={(e) => setNum1(Number(e.target.value))}
      />

      <input
        type="text"
        placeholder="valor 2"
        onChange={(e) => setNum2(Number(e.target.value))}
      />

      <button onClick={ handleSum} type="button">
        Somar
      </button>
      <button onClick={handleSubtract} type="button">
        Subtrair
      </button>
      <div>
        {result}
      </div>
    </div>
  )
}

export default Calculator;

/*
modo de utilização com o connect
{function mapStateToProps(state) {
  return{
    result: state.calculator,
  }
};

export default connect(mapStateToProps)(Calculator);}*/