import {useState} from 'react'
import {useHistory} from 'react-router-dom'

import TimeNow from './TimeNow'

import {today, getDaysInMonth} from '../helpers/DateFunctions'



const Calendar = () => {
  const history = useHistory();
  const [date, setDate] = useState(today)
  const [num, setNum] = useState(0)

  const plusMonth = () => {
    setNum(num + 1)
    date.setMonth(date.getMonth() + 1)
    setDate(date)
  }
  
  const minusMonth = () => {
    setNum(num - 1)
    date.setMonth(date.getMonth() - 1)
    setDate(date)
  }
  
  const showDate = (e) => {
    history.push({
      pathname: '/date',
      state: {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: e.target.innerText,
      }
    });
  }
  
  const thisMonth = getDaysInMonth(date.getMonth(), date.getFullYear())
  
  const displayDays = (['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'].map(day => {
    return (
      <p key={day} value={day} className='DayOfWeek'>{day}</p>
    )
  }))
  
  const displayThisMonthsDays = (thisMonth.map(elem => {
    return (
      today.getDate() === elem.getDate() ? 
      <p key={elem} value={elem} className='Date CurrentDay' onClick={showDate}>{elem.getDate().toString().padStart(2, "0")}</p> :
      <p key={elem} value={elem} className='Date' onClick={showDate}>{elem.getDate().toString().padStart(2, "0")}</p> 
    )
  }))

  return (
    <div className="Calendar">
          <h2 style={{color: 'white'}}>{<TimeNow year={date.getFullYear()} month={date.getMonth()} day={date.getDate().toString().padStart(2, "0")}/>}</h2>
      <header>
      <button onClick={minusMonth}>-</button>
        <h2>{date.toLocaleString('default', { month: 'long' })}</h2>
      <button onClick={plusMonth}>+</button>
      </header>
      <div className='Days'>
        {displayDays}
        {displayThisMonthsDays}
      </div>
    </div>
  );
}

export default Calendar;