import {useHistory, useLocation} from 'react-router-dom'


const DateView = (props) => {
  const location = useLocation()
  const today = new Date(location.state.year, location.state.month, location.state.day)

  const history = useHistory();
  return (
    <div className='DateView'>
      <h2>{today.toString()}</h2>
      <button onClick={() => history.push('/')}>Go Back</button>
    </div>
  );
}

export default DateView;