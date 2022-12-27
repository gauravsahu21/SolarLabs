
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import MonthCard from './monthcard';





export default function YearCard() {
    const [one,setOne]=useState(false);
    const [two,setTwo]=useState(false);
    const [three,setThree]=useState(false);
    const handle2021=()=>{
        setOne(!one);
        //console.log(one);
    }
    const handle2022=()=>{
        setTwo(!two);
        //console.log(two);
    }
    const handle2023=()=>{
        setThree(!three);
       // console.log(three);
    }
    
  return (
    <div>
    <Card sx={{ maxWidth: 400 }} className="ml-6 border-solid border-2">
      <CardActionArea>
        <CardContent>
         
          <div className='d-flex'>
            <div>
            <Checkbox label="Label" onClick={handle2021}/>
            <label className='font-semibold '>2021</label>
            </div>
            <div>
            <Checkbox label="Label" onClick={handle2022}/>
            <label className='font-semibold '>2022</label>
            </div>
            <div>
            <Checkbox label="Label" onClick={handle2023}/>
            <label className='font-semibold '>2023</label>
            </div>
         </div>

        </CardContent>
      </CardActionArea>
    </Card>
     {one && <Cardabc year={2021}/>}
     {two && <Cardabc year={2022}/>}
     {three&& <Cardabc year={2023}/>}

    </div>
  );
}


const Cardabc=(props)=>{
    const [value,setvalue]=useState('select');
    
    const options = [
        { label: 'Select One', value:'select' },
        { label: 'Jan-Apr', value: 'first' },
        { label: 'May-Aug', value: 'second' },
        { label: 'Sep-Dec', value: 'third' },
     
      ];
    
   const Jan_Apr=['Jan','Feb','Mar','Apr'];
   const May_Aug=['May','Jun','Jul','Aug'];
   const Sep_Dec=['Sep','Oct','Nov','Dec'];

     
     

    const handleChange=(event)=>{
        setvalue(event.target.value);
    }

    return(
     
      <div>
        <Card sx={{ maxWidth: 400 ,minHeight:200  }} className="ml-6 mt-6 border-solid border-2 ">
        <CardActionArea>
          <CardContent>
           <h3>YEAR :{props.year}</h3>
      <label>

       Select Month -
         <select value={value} onChange={handleChange}>

         {options.map((option) => (

           <option key={value+Math.random()} value={option.value}>{option.label}</option>

         ))}

        </select>
         
      </label>
  
     
          </CardContent>
       
        </CardActionArea>
        {value==='first' && <MonthCard value={Jan_Apr}/>}
       {value==='second' && <MonthCard value={May_Aug}/>}
       {value==='third' && <MonthCard value={Sep_Dec}/>}
      </Card>
     

    </div>

    )
}
