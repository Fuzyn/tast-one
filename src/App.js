import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [value, setValue] = useState();
  const [userAnswerTable, setUserAnswerTable] = useState([])
  const [loading, setLoading] = useState(false)

  const min = 0
  const max = 10000000

  const checkNumber = (evt) => {
    let tableDivisibleNumber = [];
    if (evt.key === 'Enter') {
      setLoading(true)
      setValue();
      for (let i = 1; i <= evt.target.value; i++) {
        if (i % 3 === 0) {
          tableDivisibleNumber.push(i)
        };
      };
      if (tableDivisibleNumber.length === 0) {
        return setUserAnswerTable(['Brak liczb podzielnych przez 3!'])
      };
    };
    evt.target.value = '';
    return setUserAnswerTable(tableDivisibleNumber)

  }
  const loadingComponent = () => {
    if (loading === false) {
      return (
        userAnswerTable.map((value, index) => (
          <p key={index}>{value}</p>
        ))
      )
    } else if (loading === true) {
      return (
        <div className='loading-main'>
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
          <div className='loading' />
        </div>
      )
    } else {
      return
    }
  }

  useEffect(() => (
    setLoading(false)
  ), [userAnswerTable])

  return (
    <div className="App">
      <h1 className='title'>Wpisz liczbę od 0 do 10 000 000</h1>
      <input
        className='input'
        type='number'
        placeholder="Wpisz liczbę i naciśnij Enter!"
        onKeyPress={checkNumber.bind(this)}
        value={value}
        onChange={(e) => {
          let value = parseInt(e.target.value, 10)
          if (value > max) { return setValue(max) };
          if (value < min) { return setValue(min) };

          setValue(value)
        }} />
      <div className='user_answer'>
        {loadingComponent()}
      </div>
    </div>
  );
}

export default App;
