import './App.css';

const checkNumber = (evt) => {
  if(evt.key === 'Enter'){
  return console.log(evt.target.value)}
}

function App() {
  return (
    <div className="App">
      <input type='number' placeholder="Wpisz liczbę i naciśnij Enter!" onKeyPress={checkNumber.bind(this)}/>
    </div>
  );
}

export default App;
