import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // Hook responsible for enter number entered
  const [value, setValue] = useState();
  // Hook responsible for the result of numbers divisible by 3
  const [userAnswerTable, setUserAnswerTable] = useState([])
  //Hook responsible for turn on loading component
  const [loading, setLoading] = useState(false)

  //Min and max value, which user could typed
  const min = 0
  const max = 10000000

  //Function responible for choose of numbers divisible by 3
  const checkNumber = (evt) => {
    //Empty table for numbers divisible by 3
    let tableDivisibleNumber = [];
    if (evt.key === 'Enter') {
      //Turn on Loading component
      setLoading(true)
      //Clear input
      setValue();
      //Loop responsible for choose of numbers divisible by 3 
      for (let i = 1; i <= evt.target.value; i++) {
        if (i % 3 === 0) {
          tableDivisibleNumber.push(i)
        };
      };
      //If responsible for displaying the message, when there is no single number that is divisible by 3 
      if (tableDivisibleNumber.length === 0) {
        evt.target.value = '';
        return setUserAnswerTable(['No numbers that are divisible by 3!'])
      };
    };
    //Clears input and updates user table numbers divisible by 3
    evt.target.value = '';
    return setUserAnswerTable(tableDivisibleNumber)

  }

  //Component displaying tables with data, or loading component
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

  //Hook responsible for turn off loading component
  useEffect(() => (
    setLoading(false)
  ), [userAnswerTable])

  return (
    <div className="App">
      <h1 className='title'>Enter a number between 0 and 10 000 000</h1>
      <input
        className='input'
        type='number'
        placeholder="Enter a number and press Enter!"
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
