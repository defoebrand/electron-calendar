import {useState, useEffect} from 'react'

const TimeNow = ({year,month,day}) => {
  const [time, setTime] = useState(new Date())
  const today = new Date(year, month, day)

  useEffect(() => {
     const time = () => {
       const event = new Date();
       setTime(event);
     };
     const intervalId = setInterval(time, 1000);

     return () => {
       clearInterval(intervalId);
     };
   }, []);
    today.setTime(time)

  return (
    today.toString()
  );
}

export default TimeNow;