import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let out = '';

  let exersTask2 = React.createRef();
  let exersTask5 = React.createRef();
  let exersTask5Out = React.createRef();
  let exersTask6 = React.createRef();
  const [output, setOutput] = useState();
  let exersTask7 = React.createRef();
  let exersTask8Out = React.createRef();
  let exersTask9 = React.createRef();
  let exersTask9Out = React.createRef();
  let exersTask10Out = React.createRef();

  function task1() {
    console.log('task2');
  }

  function task2() {
    exersTask2.current.className = 'active';

  }

  function task3(event) {
    console.log(event.target.value)
  }

  function task4() {
    count4++;
    console.log(count4);
  }

  function task5() {
    let inputValue = exersTask5.current.value;

    if (exersTask5.current.checked) exersTask5Out.current.innerHTML = inputValue;
    else exersTask5Out.current.innerHTML = 0;
  }

  function task6() {
    setOutput(exersTask6.current.value);
  }

  function task7() {
    function randomInt() {
      return Math.floor(Math.random() * Math.pow(256, 1))
    }
    let r = randomInt();
    let g = randomInt();
    let b = randomInt();
    let rgb = `rgb(${r},${g},${b})`
    exersTask7.current.style.backgroundColor = rgb;

  }

  function task8(event) {
    if (event.charCode > 47 & event.charCode < 58) out += "1";
    else out += "0";
    exersTask8Out.current.innerHTML = out;
  }

  function task9() {
    exersTask9Out.current.innerHTML = exersTask9.current.value;

  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(exersTask10Out.current.value)
    console.log(ar10)

  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ref={exersTask2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} ref={exersTask5} />
        <div className="out-5" ref={exersTask5Out}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={exersTask6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{}} ref={exersTask7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ></input>
        <div className="out-8" ref={exersTask8Out}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={exersTask9}></input>
        <div className="out-9" ref={exersTask9Out}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={exersTask10Out}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
