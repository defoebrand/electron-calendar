import {useHistory, useLocation} from 'react-router-dom'


const DateView = (props) => {
  const location = useLocation()
  const today = new Date(location.state.year, location.state.month, location.state.day)

  const history = useHistory();
  return (
    <>
    <h1 style={{color: 'white'}}>{today.toString()}</h1>
    <button onClick={() => history.push('/')}>Go Back</button>
    </>
  );
}

export default DateView;