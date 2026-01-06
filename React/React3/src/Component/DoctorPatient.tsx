import { Link, useParams } from "react-router-dom";

interface Doctor {
  doctorId: string;
}

const DoctorPatient = () => {
    const size = Math.floor(Math.random() * 10) + 1;
    const patients:number[]=[];
    for (let index = 0; index < size; index++) {
        patients.push(index+1);
    }
    const {doctorId}=useParams<Doctor>();
    if (!doctorId || isNaN(Number(doctorId))) {
        return <div>Invalid Doctor ID</div>;
    }

    return (
        <div>
            <p>Doctor {doctorId}</p>
            <ul>
                {patients.map((p,index)=>(
                    <li key={index}><Link to={`/doctors/${doctorId}/patients/${p}`}>Patient {p}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default DoctorPatient