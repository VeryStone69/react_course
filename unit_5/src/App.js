import './App.css';
import React, { createRef } from 'react';
import { useState } from 'react';


function App() {


  const [st1, setSt1] = useState();
  let in1 = React.createRef();
  const [st2, setSt2] = useState(0);
  const [st3, setSt3] = useState();
  const [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState();
  let exersTask5 = React.createRef();
  let exersTask6 = React.createRef();
  const [st6, setSt6] = useState();
  let exersTask7 = React.createRef();
  const [st7, setSt7] = useState();
  const [st8, setSt8] = useState('');
  const [st9, setSt9] = useState();
  let exersTask9 = React.createRef();
  const [st10, setSt10] = useState([]);
  let exersTask10 = React.createRef();



  function task1() {
    setSt1(in1.current.value);
  }
  function task2() {
    let currentCount = st2;
    currentCount++;
    setSt2(currentCount);
  }
  function task3(event) {
    setSt3(event.target.value);
  }
  function task4() {
    let currentCount = st4;
    currentCount++;
    setSt4(currentCount);
  }
  function task5() {
    if (exersTask5.current.checked) setSt5(exersTask5.current.value);
    else setSt5(0);
  }
  function task6() {
    setSt6(exersTask6.current.value)
  }
  function task7() {
    function randomInt() {
      return Math.floor(Math.random() * Math.pow(256, 1))
    }
    let r = randomInt();
    let g = randomInt();
    let b = randomInt();
    let rgb = `rgb(${r},${g},${b})`
    setSt7(rgb);
    exersTask7.current.style.backgroundColor = rgb;
  }
  function task8(event) {
    let out = st8;
    if (event.charCode > 47 & event.charCode < 58) out += '1';
    else out += '0';
    setSt8(out);
  }
  function task9() {
    let out = exersTask9.current.value;
    setSt9(out);
  }
  function task10() {
    let imputValue = exersTask10.current.value;
    let numbers = [...st10, imputValue];
    setSt10(numbers);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={in1} />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} ref={exersTask5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={exersTask6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{}} ref={exersTask7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={exersTask9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={exersTask10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
