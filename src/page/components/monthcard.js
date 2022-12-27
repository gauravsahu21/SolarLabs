
import { useState } from 'react';

export default  function MonthCard(props){
    
//   console.log(props);
  const k=props.value;
  const [months,setMonths]=useState([ 
             {
             name:k[0],
              disabled:false,
              value:0
              },
             {
             name:k[1],
              disabled:false,
              value:0
              },
             {
               name:k[2],
               disabled:false,
               value:0
               },
                {
                name:k[3],
                 disabled:false,
                 value:0
                  }
                ])

const handleChange=(event)=>{
 
  
  let newArr=[...months]
  newArr.forEach(x=>{
    if(x.name!==event.target.name)
    {//console.log('x.name',x.name);
      x.disabled=true;
    }
  })
  setMonths(newArr);

}
const handleReset=()=>{
    let newArr=[...months]
    newArr.forEach(X=>{
        X.disabled=false;
        X.value=0;
    })
    setMonths(newArr);
}
const randomNumber=(min, max)=>{ 
    //console.log("min",min,max);
    return Math.floor(Math.random() * (max - min) + min);
} 
const handleCalculate=()=>{
    let newArr=[...months]
    let updatedMonth=newArr.filter(x=>x.value!==0);
    //console.log(updatedMonth);
    let enteredValue=updatedMonth[0].value;
   // console.log(enteredValue); 
   
    newArr.forEach(x=>{
        if(x.value===0)
        {
            x.value=randomNumber(Number(enteredValue)-100,Number(enteredValue)+100);
            x.disabled=false;
        }
    })
    setMonths(newArr);

}

  return(
     <div>
       
      <div className='flex flex-row justify-between'>
        <div>
     {
      months.map(x=>{
        return(<div key={x.name}><label>{x.name}-<input type="number" value={x.value} name={x.name} disabled={x.disabled} onClick={handleChange} onChange={(e) => {
          x.value = e.target.value;
          setMonths([...months]);
        }}/></label></div>)
      })
     }
     </div>
     <div>
     
        <button className="bg-blue-500 bg-blue-700 text-white  py-2 px-4 rounded" onClick={handleReset}>Reset</button>
     </div>
     </div>
     <div className='flex flex-row justify-end'>
        <div>
         <button className="bg-blue-500 bg-blue-700 text-white  py-2 px-4 rounded"  onClick={handleCalculate}>Calculate</button>
         </div>
     </div>
      
    </div>
  )
}