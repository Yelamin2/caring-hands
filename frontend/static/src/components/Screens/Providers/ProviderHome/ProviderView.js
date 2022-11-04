import { format, compareAsc } from 'date-fns'
import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enUS from 'date-fns/locale/en-US';


function ProviderView(){
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());


  const [date,setDate]=useState(new Date());
  const onChange= date =>{
  setDate(date);
  setDefaultLocale('enUS');
  }
  const onSubmit = event => {
    event.preventDefault();
    alert(date)
  }
  return(
    <div className="calendarApp mt-5">
       
            <DatePicker
      selected={startTime}
      onChange={(date) => setStartTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
     <DatePicker
      selected={endTime}
      onChange={(date) => setEndTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
              
      </div>
  );
}



export default ProviderView