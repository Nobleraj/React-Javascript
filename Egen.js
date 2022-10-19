//Find best available time between doctor and patient
const obj = {
  doctor: [
    '2022-09-21T12:31:00.000Z',
    '2022-09-21T12:10:00.000Z',
    '2022-09-21T12:30:00.000Z',
    '2022-09-21T14:00:00.000Z',
    '2022-09-21T14:45:00.000Z',
  ],
  patient: ['2022-09-21T17:00:00.000Z', '2022-09-21T12:32:00.000Z'],
};

function availableTimeSlot(data) {
  let doctor = data.doctor;
  let patient = data.patient;

  let min1 = Infinity,
    str1 = '';
  for (var i = 0; i < doctor.length; i++) {
    for (var j = 0; j < patient.length; j++) {
      if (doctor[i] === patient[j]) return doctor[i];
      let curr = Math.abs(
        new Date(doctor[i]).getTime() - new Date(patient[j]).getTime()
      );
      if (curr < min1) {
        min1 = curr;
        str1 = doctor[i];
      }
    }
  }
  return str1;
}
console.log('res', availableTimeSlot(obj));

//Build a component to render Restaurant namme and latest review based on data time
import React, { useState, useEffect} from 'react';
import axios from "axios";

const ToDoComponent = () => {

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const api = async() =>{
            const { data } = await axios.get("https://api.npoint.io/2002e3907f18232d15f2");
            setResData(data.restaurants);
        }
        api();
    },[]);

    const reviewsFn = (arr,i) =>{
        let temp = [...arr].sort((a,b)=>new Date(b.date).getTime() - new Date(a.date).getTime())
        let data = {...temp[0]};
        console.log("date", data);
        return <div>
           <br/>
           Date : {data.date} Rating : {data.rating} Comment : {data.comment}
        </div>
    }

    return (
        <div>
            Restaurants Name

            {resData.map((itm,i)=>{
                return <div key={i}>
                    <div>
                        <label>Name : </label><span>{itm.name}</span>
                        {itm.reviews.map((val,j)=><div key={j}>Date: {val.date} Rating : {val.rating} Comment : {val.comment}</div>)}
                    </div>
                    {reviewsFn(itm.reviews)}
                    <br/>
                </div>
            })}


        </div>
    )
}
export default ToDoComponent;