import {useState} from 'react'
import {useHistory} from 'react-router-dom'

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
  
  const displayThisMonthsDays = (thisMonth.map((elem) => {
    return (
      <p key={elem} value={elem} className='Date' onClick={showDate}>{elem.getDate().toString().padStart(2, "0")}</p>
    )
  }))

  return (
    <div className="Calendar">
      <header>
      <button onClick={minusMonth}>-</button>
        <h2>{date.toLocaleString('default', { month: 'long' })}</h2>
      <button onClick={plusMonth}>+</button>
      </header>
      <div className='Days'>
        {displayThisMonthsDays}
      </div>
    </div>
  );
}

export default Calendar;