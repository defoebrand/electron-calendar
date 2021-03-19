import {useState, useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom'

import TimeNow from './TimeNow'
import {students} from '../assets/data/Students'

console.log(students)


const DateView = (props) => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://www.defoebrand.com/appointments', {
       mode: 'cors', 
     }).then(response => response.json()).then(appt => setData(appt))
  },[])
  const location = useLocation()
  const today = new Date(location.state.year, location.state.month, location.state.day)
  const now = new Date();
  today.setTime(now)

  const history = useHistory();
  return (
    <div className='DateView'>
      <h2>{<TimeNow year={location.state.year} month={location.state.month} day={location.state.day}/>}</h2>
      {data.filter(appt_time => (
        appt_time.date === `${location.state.year}-${(location.state.month + 1).toString().padStart(2, "0")}-${location.state.day}` ?
        appt_time  : null
    )).map(appt_time => (
      <div key={appt_time.id}>
        <p style={{color: 'white'}}>{`${appt_time.time.split('T')[1].split('.0')[0]}: ${students[appt_time.student_id]}`}</p>
        <p style={{color: 'white'}}>{appt_time.notes}</p>
      </div>
    ))}
      <button onClick={() => history.push('/')}>Go Back</button>
    </div>
  );
}

export default DateView;