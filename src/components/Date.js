import {useHistory, useLocation} from 'react-router-dom'


const Date = (props) => {
  const location = useLocation()
  // const {foo} = props.location.state
  console.log(location)
  const history = useHistory();
  return (
    <>
    <h1>Hello!</h1>
    <button onClick={() => history.push('/')}>Go Back</button>
    </>
  );
}

export default Date;