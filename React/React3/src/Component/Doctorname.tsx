import {Link} from 'react-router-dom';

const Doctorname = () => {
  return (
    <ul>
        <li><Link to={"/doctors/1/patients"}>Doctor 1</Link></li>
        <li><Link to={"/doctors/2/patients"}>Doctor 2</Link></li>
        <li><Link to={"/doctors/3/patients"}>Doctor 3</Link></li>
        <li><Link to={"/doctors/4/patients"}>Doctor 4</Link></li>
        <li><Link to={"/doctors/5/patients"}>Doctor 5</Link></li>
    </ul>
  )
}

export default Doctorname