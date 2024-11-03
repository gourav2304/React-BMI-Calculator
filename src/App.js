import "./App.css";
import React,{useState} from "react"

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  // know  logic part started 

  let bmiCal = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
        alert("Enter a valid weight and height");
    } else {
        let bmi = weight / ((height / 100) * (height / 100));
        setBmi(bmi.toFixed(1));

        if (bmi < 18.5) {
            setMessage("You are underweight");
        } else if (bmi >= 18.5 && bmi < 24.9) {
            setMessage("You have a healthy weight");
        } else {
            setMessage("You are overweight");
        }
    }
};



  let reload = ()=> {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container"></div>
      <h2>BMI Calculator</h2>
      <form onSubmit={bmiCal}>
        <div>
          <label>Weight(kg)</label>
          <input
            type="text"
            placeholder="Enter the weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height(cm)</label>
          <input
            type="text"
            placeholder="Enter the height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button
            className="btn btn-online"
            type="button"
            onClick={reload}
          >Reset</button>
        </div>
        <div className="center">
          <h3>Your Bmi is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;

