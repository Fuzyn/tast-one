import './App.css';
import { useState } from 'react';



function App() {

  const [value, setValue] = useState();
  const [userAnswerTable, setUserAnswerTable] = useState([])

  const min = 0
  const max = 10000000

  const checkNumber = (evt) => {
    let tableDivisibleNumber = []
    if (evt.key === 'Enter') {
      for (let i = 1; i <= evt.target.value; i++) {
        if (i % 3 === 0) {
          tableDivisibleNumber.push(i)
        }
      }
      evt.target.value = '';
      if(tableDivisibleNumber.length === 0){
        return(
          setUserAnswerTable(['Brak liczb podzielnych przez 3!'])
        )
      }
      return setUserAnswerTable(tableDivisibleNumber)
    }
  }

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
          let values = parseInt(e.target.value, 10)
          if (values > max) {return setValue(max)};
          if (values < min) {return setValue(min)};
          
          setValue(values)
        }} />
      <div className='user_answer'>
        {userAnswerTable.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
