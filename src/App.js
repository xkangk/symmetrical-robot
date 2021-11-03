import './App.css';
import {useState} from 'react'
function App() {
  const [height,setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi,setBMI] = useState(0);

function calculate(e){
  e.preventDefault();
  setBMI(weight/ Math.pow(height,2));
}


  return (
    <div id="container">
      <form onSubmit={calculate}>
        <h3>BMI calculator</h3>
        <div>
          <label>Height</label>
          <input type="number" step="0.01" 
          onChange={e => setHeight(e.target.value)} 
          value={height}/>
        </div>

        <div>
            <label>Weight</label>
            <input type="number" step="1" 
            onChange={e => setWeight(e.target.value)} 
            value={weight}/>
        </div>
        <div>
          <label>BMI</label>
          <output>{bmi.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}
export default App;
