import React ,{useState,useEffect} from 'react'
function App() {
const [count,setCount]=useState(0);
const [incremnt,setIncremt]=useState(5);
useEffect(()=>{
  let msg_p=document.getElementById("msg");
  msg_p.textContent=`you clicked button ${count} times`
},[])

useEffect(()=>{
  let msg_pa=document.getElementById("new_msg");
  
  incremnt<=0?
  (msg_pa.textContent=`you clicked button =0 times`)
  
  :
  (
  msg_pa.textContent=`you clicked button ${incremnt}  times`)
})
  return (
    <div className="App">
      <p id="msg"></p>
      <p>
        this count = {count}
      </p>
      <button onClick={()=>setCount(count+1)}>
        click to increment
      </button>
{/* increemnt */}
<p id= "new_msg"></p>
      <p>
        this incremt = {incremnt}
      </p>
      <button onClick={()=>setIncremt(incremnt-1)}>
        click to increment
      </button>
    </div>
  );
}

export default App;
