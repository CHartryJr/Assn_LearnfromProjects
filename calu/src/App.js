import { useState } from "react";
function App() 
{
  const[calc, setCalc] = useState("");
  const[result,setResult]= useState("");
  const ops = ['/','*','+','-','.']

  const updateCalc = value =>
  {
    if(
      (ops.includes(value) && calc==='')||(ops.includes(value)&&ops.includes(calc.slice(-1)))
    ){return;}
    setCalc(calc+value)
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

  const calculate =()=>{
    setCalc(eval(calc).toString());
  }

  const del=()=>{
   if(calc === '')
   return;
   const value = calc.slice(0,-1);
   setCalc(value);
  }
  const clear=()=>{
    setCalc('')
  }

  const createDigits=()=>
  {
    const digits =[];
    for (let i =1; i < 10; i++)
    {
      digits.push(<button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>)
    }
    return digits;
  }

  return (
    <div className = "App" >
      <div className =" Calculator" id ="CalBody">
        <div className ="Display" id ="DisplayBar">
         {result ?<span>({result})</span>:'' }{calc||0}
          </div>
          <div className = "Operators">
            <button id ="division " onClick={()=>updateCalc('/')}>/</button>
            <button id ="multiply" onClick={()=>updateCalc('*')}>*</button>
            <button id ="subtract" onClick={()=>updateCalc('-')}>-</button>
            <button id ="add" onClick={()=>updateCalc('+')}>+</button>
            <button id ="delete" onClick={()=>del()}>DEL</button>
            <button id ="clear" onClick={()=>clear()}>CLR</button>
          </div>
          <div className ="Digits">
            {createDigits()}
            <button onClick={()=>updateCalc('0')}>0</button>
            <button onClick={()=>updateCalc('.')}>.</button>
            <button onClick={()=>calculate()}>=</button>
          </div>
        
      </div>
    </div>
  );
}
export default App;
